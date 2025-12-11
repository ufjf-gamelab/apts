import type { Seed } from "@repo/engine_core/types.js";

const FLAG_REPRESENTING_NOT_TO_SET_SEED = 0;
const HASH_FALLBACK_VALUE = 1;
const HASH_INITIAL_VALUE = 0;
const HASH_MODULUS = 4_294_967_296;
const HASH_MULTIPLIER = 31;
const HASH_INCREMENT = 1;

const deriveNumericSeed = ({ seed }: { seed: Seed }): number => {
  // eslint-disable-next-line init-declarations
  let numericSeed: number;

  const parsedValue = Number(seed);
  if (Number.isFinite(parsedValue)) {
    numericSeed = parsedValue;
  } else {
    let hash = HASH_INITIAL_VALUE;
    for (let index = 0; index < seed.length; index += HASH_INCREMENT) {
      const charCode = seed.charCodeAt(index);
      hash = (Math.imul(hash, HASH_MULTIPLIER) + charCode) % HASH_MODULUS;
    }
    numericSeed = hash === HASH_INITIAL_VALUE ? HASH_FALLBACK_VALUE : hash;
  }

  return numericSeed === FLAG_REPRESENTING_NOT_TO_SET_SEED
    ? HASH_FALLBACK_VALUE
    : numericSeed;
};

export { deriveNumericSeed };
