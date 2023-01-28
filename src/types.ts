import type { ObfuscatorOptions } from "javascript-obfuscator";

export interface IOptions {
  includeRegEx: RegExp;
  excludeRegEx: RegExp;
  options: ObfuscatorOptions;
}
