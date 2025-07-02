import type {
  EncodedTestingState,
  default as TestingState,
} from "../../State.js";
import {
  type DefinitionsForEncodingField,
  type DefinitionsForEncodingObject,
  encodeObject,
  encodeObjects,
  type FieldsAndDefinitionsForEncodingThem,
  type GetObjectAsRecord,
} from "../encode.js";
import { encodeSlots } from "../Slot/encode.js";

type DefinitionsForEncodingState = DefinitionsForEncodingObject & {
  fieldsAndDefinitionsForEncodingThem: FieldsOfStateAndDefinitionsForEncodingThem;
};

type FieldsOfStateAndDefinitionsForEncodingThem = [
  ...{
    definitions: DefinitionsForEncodingField;
    key: keyof EncodedTestingState;
  }[],
] &
  FieldsAndDefinitionsForEncodingThem;

const fieldsOfStateAndDefaultDefinitionsForEncodingThem: FieldsOfStateAndDefinitionsForEncodingThem =
  [
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "indexOfPlayer",
    },
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "score",
    },
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "slots",
    },
  ];

const defaultDefinitionsForEncodingState: DefinitionsForEncodingState = {
  fieldsAndDefinitionsForEncodingThem:
    fieldsOfStateAndDefaultDefinitionsForEncodingThem,
  surround: true,
};

const getStateAsRecord: GetObjectAsRecord<TestingState> = state => ({
  indexOfPlayer: state.getIndexOfPlayer(),
  score: encodeScore({
    score: state.getScore(),
  }),
  slots: encodeSlots({ slots: state.getSlots() }),
});

const encodeState = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingState,
  state,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingState;
  state: TestingState;
}): string =>
  encodeObject({
    definitionsForEncodingObject,
    object: getStateAsRecord(state),
  });

const encodeStates = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingState,
  states,
  surround = true,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingState;
  states: readonly TestingState[];
  surround?: boolean;
}): string =>
  encodeObjects({
    definitionsForEncodingObject,
    objects: states.map(state => getStateAsRecord(state)),
    surround,
  });

const encodeScore = ({
  score,
  surround = true,
}: {
  score: readonly number[];
  surround?: boolean;
}): string => {
  const encodedScore = score.join(", ");
  return surround ? `[${encodedScore}]` : encodedScore;
};

export { encodeScore, encodeState, encodeStates };
