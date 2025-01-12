import Game from "@repo/engine/engine/Game/Game.js";
import State from "@repo/engine/engine/Game/State.js";
import * as tf from "@tensorflow/tfjs";
import ResNet from "./ResNet";

const LIMIT_FOR_SEED = 1000000;
const SEED = Math.floor(Math.random() * LIMIT_FOR_SEED);

/// Returns the masked policy and value as Tensors.
const maskedPrediction = <G extends Game>(
  state: State<G>,
  resNet: ResNet,
): {
  policy: tf.Tensor1D;
  value: tf.Scalar;
} =>
  tf.tidy(() => {
    // Calculate the policy and value from the neural network
    const encodedState = state.getEncodedState();
    const tensorState: tf.Tensor4D = tf.tensor(encodedState).expandDims();
    const [policy, value] = resNet.predict(tensorState);
    const squeezedValue: tf.Scalar = value.squeeze().squeeze();
    const squeezedSoftMaxPolicy = tf.softmax(policy).squeeze();
    // Mask the policy to only allow valid actions
    const validActions = state.getValidActions();
    const maskedPolicy: tf.Tensor1D = squeezedSoftMaxPolicy.mul(
      tf.tensor(validActions),
    );
    return {
      policy: maskedPolicy,
      value: squeezedValue,
    };
  });

// Returns the action probabilities from a policy Tensor as another Tensor
const probabilitiesFromPolicy = (policy: tf.Tensor1D): tf.Tensor1D =>
  tf.tidy(() => {
    const sum = policy.sum();
    return policy.div(sum);
  });

// Returns the action as a common integer. Probabilities must be normalized
export const actionFromProbabilities = (probabilities: tf.Tensor1D): Action => {
  const SAMPLES = 1;
  return tf.tidy(
    () =>
      tf
        .multinomial(probabilities, SAMPLES, SEED, true)
        .squeeze()
        .arraySync() as Action,
  );
};

type DesiredData =
  | {
      policy: true;
      value?: boolean;
      probabilities?: boolean;
      action?: boolean;
    }
  | {
      policy?: boolean;
      value: true;
      probabilities?: boolean;
      action?: boolean;
    }
  | {
      policy?: boolean;
      value?: boolean;
      probabilities: true;
      action?: boolean;
    }
  | {
      policy?: boolean;
      value?: boolean;
      probabilities?: boolean;
      action: true;
    };

interface ReturnedData {
  policy?: tf.Tensor1D;
  value?: tf.Scalar;
  probabilities?: tf.Tensor1D;
  action?: Action;
}

const predictDataFromState = <G extends Game>(
  state: State<G>,
  resNet: ResNet,
  desiredData: DesiredData,
) => {
  const data: ReturnedData = {};
  const { policy, value } = maskedPrediction(state, resNet);
  if (desiredData.policy) {
    data.policy = policy;
  }
  if (desiredData.value) {
    data.value = value;
  }
  if (desiredData.probabilities || desiredData.action) {
    const probabilities = probabilitiesFromPolicy(policy);
    if (desiredData.probabilities) {
      data.probabilities = probabilities;
    }
    if (desiredData.action) {
      data.action = actionFromProbabilities(probabilities);
    }
  }
  if (!desiredData.policy) {
    tf.dispose(policy);
  }
  if (!desiredData.value) {
    tf.dispose(value);
  }
  return data;
};

export const predictActionFromState = <G extends Game>(
  state: State<G>,
  resNet: ResNet,
): { action: Action } => {
  const data = predictDataFromState(state, resNet, {
    action: true,
    policy: false,
    probabilities: false,
    value: false,
  });
  if (!data.action) {
    throw new Error("No action was predicted");
  }
  return { action: data.action };
};

export const predictValueAndProbabilitiesFromState = <G extends Game>(
  state: State<G>,
  resNet: ResNet,
): { value: tf.Scalar; probabilities: tf.Tensor1D } => {
  const data = predictDataFromState(state, resNet, {
    action: false,
    policy: false,
    probabilities: true,
    value: true,
  });
  if (!data.value) {
    throw new Error("No value was predicted");
  }
  if (!data.probabilities) {
    throw new Error("No probabilities were predicted");
  }
  return { probabilities: data.probabilities, value: data.value };
};

export const predictPolicyAndValueAndProbabilitiesAndActionFromState = <
  G extends Game,
>(
  state: State<G>,
  resNet: ResNet,
): {
  policy: tf.Tensor1D;
  value: tf.Scalar;
  probabilities: tf.Tensor1D;
  action: Action;
} => {
  const data = predictDataFromState(state, resNet, {
    action: true,
    policy: true,
    probabilities: true,
    value: true,
  });
  if (!data.value) {
    throw new Error("No value was predicted");
  }
  if (!data.probabilities) {
    throw new Error("No probabilities were predicted");
  }
  if (!data.action) {
    throw new Error("No action was predicted");
  }
  if (!data.policy) {
    throw new Error("No policy was predicted");
  }
  return {
    action: data.action,
    policy: data.policy,
    probabilities: data.probabilities,
    value: data.value,
  };
};
