import type { ObfuscatorOptions } from "javascript-obfuscator";

export const INCLUDE_REGEX = /\.(js|jsx|ts|tsx|cjs|mjs)$/;
export const EXCLUDE_REGEX = /^(?!.*\.(spec|test)\.(ts|js)$).*\.(js|ts)$/;

export const DEFAULT_OBFUSCATION_OPTIONS: ObfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true,
  stringArrayShuffle: true,
  splitStrings: true,
  stringArrayThreshold: 1,
};

export const fileMatcher = (regex: RegExp) => (path: string) =>
  regex.test(path);
