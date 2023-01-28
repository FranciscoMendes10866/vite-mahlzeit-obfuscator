import type { Plugin as VitePlugin } from "vite";
import obfuscator from "javascript-obfuscator";

import {
  DEFAULT_OBFUSCATION_OPTIONS,
  EXCLUDE_REGEX,
  INCLUDE_REGEX,
  fileMatcher,
} from "./utils";
import { IOptions } from "./types";

const { obfuscate } = obfuscator;

function plugin(opts?: IOptions): VitePlugin {
  const includeRegEx = opts?.includeRegEx ?? INCLUDE_REGEX;
  const excludeRegEx = opts?.includeRegEx ?? EXCLUDE_REGEX;
  const obfustactionOpts = opts?.options ?? DEFAULT_OBFUSCATION_OPTIONS;

  let canObfuscate: boolean = true;

  return {
    name: "vite-mahlzeit-obfuscator",
    enforce: "post",
    buildStart: () => {
      if (!includeRegEx) {
        console.warn("includeRegEx must be a regular expression");
        canObfuscate = false;
      }

      if (!excludeRegEx) {
        console.warn("excludeRegEx must be a regular expression");
        canObfuscate = false;
      }
    },
    transform: (code, id) => {
      if (!canObfuscate) return;

      const includeMatcher = fileMatcher(includeRegEx);
      const excludeMatcher = fileMatcher(excludeRegEx);

      const isLegible = includeMatcher(id) && excludeMatcher(id);

      if (isLegible) {
        const obfuscationResult = obfuscate(code, obfustactionOpts);

        return {
          code: obfuscationResult.getObfuscatedCode(),
          ...(obfustactionOpts.sourceMap &&
          obfustactionOpts.sourceMapMode !== "inline"
            ? { map: obfuscationResult.getSourceMap() }
            : {}),
        };
      }
    },
  };
}

export default plugin;
