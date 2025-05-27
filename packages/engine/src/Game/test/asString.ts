interface DefinitionsOfFieldAsString {
  [key: string]: boolean | string;
  visibility: Visibility;
}

interface DefinitionsOfObjectAsString {
  fields: { definition: DefinitionsOfFieldAsString; key: string }[];
  surround: boolean;
}

type ShowNullAs = "empty" | "null";
type Visibility = "hide" | "hideKey" | "show";

const getValueAsString = (
  value: unknown,
  definitionOfField: DefinitionsOfFieldAsString,
): string => {
  if (typeof value === "undefined") {
    return "";
  }
  if (value === null) {
    if (definitionOfField["showNullAs"] === "empty") {
      return "";
    }
    return `null`;
  }
  return JSON.stringify(value);
};

const getFieldAsString = (
  key: string,
  value: unknown,
  definitionOfField: DefinitionsOfFieldAsString,
): null | string => {
  if (definitionOfField.visibility === "hide") {
    return null;
  }
  const valueAsString = getValueAsString(value, definitionOfField);
  if (definitionOfField.visibility === "hideKey") {
    return valueAsString;
  }
  return `${key}: ${valueAsString}`;
};

type GetObjectAsString = (
  object: Record<string, unknown>,
  definitions: DefinitionsOfObjectAsString,
) => string;

const getObjectAsString: GetObjectAsString = (object, definitions) => {
  const fieldsAsString: string[] = [];

  for (const field of definitions.fields) {
    const { definition, key } = field;
    const value = object[key];
    const fieldAsString = getFieldAsString(key, value, definition);
    if (fieldAsString !== null) {
      fieldsAsString.push(fieldAsString);
    }
  }

  const objectAsString = fieldsAsString.join(", ");
  if (definitions.surround) {
    return `{${objectAsString}}`;
  }
  return objectAsString;
};

export type {
  DefinitionsOfFieldAsString,
  DefinitionsOfObjectAsString,
  ShowNullAs,
};
export { getObjectAsString };
