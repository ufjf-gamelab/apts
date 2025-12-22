import type { Seed } from "@repo/core/types.js";

const FLAG_REPRESENTING_NOT_TO_SET_SEED = 0;
const HASH_VALUE_TO_RECALCULATE = "1";
const HASH_INITIAL_VALUE = 0;
const HASH_MODULUS = 4_294_967_296;
const HASH_MULTIPLIER = 31;
const HASH_INCREMENT = 1;

const deriveNumericSeed = ({ seed }: { seed: Seed }): number => {
  let hash = HASH_INITIAL_VALUE;
  for (let index = 0; index < seed.length; index += HASH_INCREMENT) {
    const charCode = seed.charCodeAt(index);
    hash = (Math.imul(hash, HASH_MULTIPLIER) + charCode) % HASH_MODULUS;
  }

  const validHash =
    hash === FLAG_REPRESENTING_NOT_TO_SET_SEED
      ? deriveNumericSeed({ seed: seed.concat(HASH_VALUE_TO_RECALCULATE) })
      : hash;

  return validHash;
};

export { deriveNumericSeed };
