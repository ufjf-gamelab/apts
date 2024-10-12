import * as tf from "@tensorflow/tfjs";
import State, { Action } from "./Game/State";
import ResNet from "./ResNet";
import { GameName } from "./types";

const firstPosition = 0,
	secondPosition = 1;
export const capitalizedFirstLetter = (str: string) =>
	str.charAt(firstPosition).toUpperCase() + str.slice(secondPosition);

const paddedWithTwoDigits = (num: number) => {
	return num.toString().padStart(2, "0");
};

export const formattedDate = (date: Date) => {
	const year = paddedWithTwoDigits(date.getFullYear());
	const month = paddedWithTwoDigits(date.getMonth() + 1);
	const day = paddedWithTwoDigits(date.getDate());
	const hour = paddedWithTwoDigits(date.getHours());
	const minutes = paddedWithTwoDigits(date.getMinutes());
	const seconds = paddedWithTwoDigits(date.getSeconds());
	return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};

export function fullModelPath(gameName: GameName, innerPath: string) {
	return `/${gameName}/${innerPath}`;
}

export function getRandomValidAction(state: State): Action | null {
	const encodedValidActions = state.getValidActions();
	const validActions = [];
	for (let i = 0; i < encodedValidActions.length; i++) {
		if (encodedValidActions[i]) validActions.push(i);
	}
	const index = Math.floor(Math.random() * validActions.length);
	return validActions[index] ?? null;
}

// Returns the masked policy and value as Tensors
function getMaskedPrediction(
	state: State,
	resNet: ResNet,
): {
	policy: tf.Tensor1D;
	value: tf.Scalar;
} {
	return tf.tidy(() => {
		// Calculate the policy and value from the neural network
		const encodedState = state.getEncodedState();
		const tensorState = tf.tensor(encodedState).expandDims(0) as tf.Tensor4D;
		const [policy, value] = resNet.predict(tensorState);
		const squeezedValue = value.squeeze().squeeze() as tf.Scalar;
		const squeezedSoftMaxPolicy = tf.softmax(policy).squeeze();
		// Mask the policy to only allow valid actions
		const validActions = state.getValidActions();
		const maskedPolicy = squeezedSoftMaxPolicy.mul(
			tf.tensor(validActions),
		) as tf.Tensor1D;
		return {
			policy: maskedPolicy,
			value: squeezedValue,
		};
	});
}

// Returns the action probabilities from a policy Tensor as another Tensor
function getProbabilitiesFromPolicy(policy: tf.Tensor1D): tf.Tensor1D {
	return tf.tidy(() => {
		const sum = policy.sum();
		return policy.div(sum);
	});
}

// Returns the action as a common integer. Probabilities must be normalized
export function getActionFromProbabilities(probabilities: tf.Tensor1D): Action {
	return tf.tidy(() => {
		return tf
			.multinomial(probabilities, 1, undefined, true)
			.squeeze()
			.arraySync() as Action;
	});
}

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

type ReturnedData = {
	policy?: tf.Tensor1D;
	value?: tf.Scalar;
	probabilities?: tf.Tensor1D;
	action?: Action;
};

function getPredictionDataFromState(
	state: State,
	resNet: ResNet,
	desiredData: DesiredData,
) {
	return tf.tidy(() => {
		const data: ReturnedData = {};
		const { policy, value } = getMaskedPrediction(state, resNet);
		if (desiredData.policy) data.policy = policy;
		if (desiredData.value) data.value = value;
		if (desiredData.probabilities || desiredData.action) {
			const probabilities = getProbabilitiesFromPolicy(policy);
			if (desiredData.probabilities) data.probabilities = probabilities;
			if (desiredData.action)
				data.action = getActionFromProbabilities(probabilities);
		}
		return data;
	});
}

export function getPredictionDataFromState_Action(
	state: State,
	resNet: ResNet,
): { action: Action } {
	const data = getPredictionDataFromState(state, resNet, {
		policy: false,
		value: false,
		probabilities: false,
		action: true,
	});
	return { action: data.action! };
}

export function getPredictionDataFromState_Value_Probabilities(
	state: State,
	resNet: ResNet,
): { value: tf.Scalar; probabilities: tf.Tensor1D } {
	const data = getPredictionDataFromState(state, resNet, {
		policy: false,
		value: true,
		probabilities: true,
		action: false,
	});
	return { value: data.value!, probabilities: data.probabilities! };
}

export function getPredictionDataFromState_Policy_Value_Probabilities_Action(
	state: State,
	resNet: ResNet,
): {
	policy: tf.Tensor1D;
	value: tf.Scalar;
	probabilities: tf.Tensor1D;
	action: Action;
} {
	const data = getPredictionDataFromState(state, resNet, {
		policy: true,
		value: true,
		probabilities: true,
		action: true,
	});
	return {
		policy: data.policy!,
		value: data.value!,
		probabilities: data.probabilities!,
		action: data.action!,
	};
}
