import { Integer } from "@repo/engine/types";

export const getMaskFromArray = (
  dataLength: Integer,
  keys: Integer[],
): boolean[] => {
  const mask = Array<boolean>(dataLength).fill(false);
  keys.forEach(key => {
    mask[key] = true;
  });
  return mask;
};
