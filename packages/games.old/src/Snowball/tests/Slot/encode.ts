import type TestingSlot from "../../Slot.js";
import {
  type DefinitionsForEncodingField,
  type DefinitionsForEncodingObject,
  encodeObject,
  encodeObjects,
  type FieldsAndDefinitionsForEncodingThem,
  type GetObjectAsRecord,
  type ShowNullAs,
} from "../encode.js";

type DefinitionsForEncodingSlot = DefinitionsForEncodingObject & {
  fieldsAndDefinitionsForEncodingThem: FieldsOfSlotAndDefinitionsForEncodingThem;
};

type FieldsOfSlotAndDefinitionsForEncodingThem = [
  {
    definitions: DefinitionsForEncodingField & {
      showNullAs: ShowNullAs;
    };
    key: "indexOfOccupyingPlayer";
  },
] &
  FieldsAndDefinitionsForEncodingThem;

const fieldsOfSlotAndDefaultDefinitionsForEncodingThem: FieldsOfSlotAndDefinitionsForEncodingThem =
  [
    {
      definitions: {
        showNullAs: "empty",
        visibility: "hideKey",
      },
      key: "indexOfOccupyingPlayer",
    },
  ];

const defaultDefinitionsForEncodingSlot: DefinitionsForEncodingSlot = {
  fieldsAndDefinitionsForEncodingThem:
    fieldsOfSlotAndDefaultDefinitionsForEncodingThem,
  surround: true,
};

const getSlotAsRecord: GetObjectAsRecord<TestingSlot> = slot => ({
  indexOfOccupyingPlayer: slot.getIndexOfOccupyingPlayer(),
});

const encodeSlot = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingSlot,
  slot,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingSlot;
  slot: TestingSlot;
}): string =>
  encodeObject({
    definitionsForEncodingObject,
    object: getSlotAsRecord(slot),
  });

const encodeSlots = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingSlot,
  slots,
  surround = true,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingSlot;
  slots: readonly TestingSlot[];
  surround?: boolean;
}): string =>
  encodeObjects({
    definitionsForEncodingObject,
    objects: slots.map(slot => getSlotAsRecord(slot)),
    surround,
  });

export { encodeSlot, encodeSlots };
