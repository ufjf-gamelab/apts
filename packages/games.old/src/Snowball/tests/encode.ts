interface DefinitionsForEncodingField {
  [key: string]: boolean | string;
  visibility: Visibility;
}

interface DefinitionsForEncodingObject {
  fieldsAndDefinitionsForEncodingThem: FieldsAndDefinitionsForEncodingThem;
  surround?: boolean;
}

interface FieldAndDefinitionsForEncodingIt {
  definitions: DefinitionsForEncodingField;
  key: string;
}

type FieldsAndDefinitionsForEncodingThem = FieldAndDefinitionsForEncodingIt[];

type ShowNullAs = "empty" | "null";
type Visibility = "hide" | "hideKey" | "show";

const getSanitizedValue = (
  value: unknown,
  definitionsForEncodingField: DefinitionsForEncodingField,
): unknown => {
  if (typeof value === "undefined") {
    return "";
  }
  if (value === null) {
    if (definitionsForEncodingField["showNullAs"] === "empty") {
      return "";
    }
    return `null`;
  }
  return value;
};

const encodeField = (
  key: string,
  value: unknown,
  definitionsForEncodingField: DefinitionsForEncodingField,
): unknown => {
  if (definitionsForEncodingField.visibility === "hide") {
    return null;
  }
  const sanitizedValue = getSanitizedValue(value, definitionsForEncodingField);
  if (definitionsForEncodingField.visibility === "hideKey") {
    return sanitizedValue;
  }
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `${key}: ${sanitizedValue}:`;
};

const encodeObject = ({
  definitionsForEncodingObject: {
    fieldsAndDefinitionsForEncodingThem,
    surround,
  },
  object,
}: {
  definitionsForEncodingObject: DefinitionsForEncodingObject;
  object: Record<string, unknown>;
}): string => {
  const encodedFields: unknown[] = [];

  for (const field of fieldsAndDefinitionsForEncodingThem) {
    const { definitions, key } = field;
    const value = object[key];
    const encodedField = encodeField(key, value, definitions);
    if (encodedField !== null) {
      encodedFields.push(encodedField);
    }
  }

  const encodedObject = encodedFields.join("; ");
  if (surround) {
    return `{${encodedObject}}`;
  }
  return encodedObject;
};

const encodeObjects = ({
  definitionsForEncodingObject,
  objects,
  surround = true,
}: {
  definitionsForEncodingObject: DefinitionsForEncodingObject;
  objects: readonly Record<string, unknown>[];
  surround?: boolean;
}): string => {
  const encodedObjects = objects
    .map(object => encodeObject({ definitionsForEncodingObject, object }))
    .join(", ");
  return surround ? `[${encodedObjects}]` : encodedObjects;
};

type GetObjectAsRecord<T> = (object: T) => Record<string, unknown>;

export type {
  DefinitionsForEncodingField,
  DefinitionsForEncodingObject,
  FieldAndDefinitionsForEncodingIt,
  FieldsAndDefinitionsForEncodingThem,
  GetObjectAsRecord,
  ShowNullAs,
};
export { encodeObject, encodeObjects };
