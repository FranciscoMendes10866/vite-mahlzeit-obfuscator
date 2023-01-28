# vite-mahlzeit-obfuscator

## Install

Run the following command:

```sh
npm i vite-mahlzeit-obfuscator --save-dev
```

## How to use

Make the following changes to `vite.config.js`:

```js
import { defineConfig } from "vite";
import obfuscator from "vite-mahlzeit-obfuscator";

export default defineConfig({
  plugins: [obfuscator()],
});
```

Then run the build command:

```sh
npm run build
```

If you just want to obfuscate specific files you can provide a regular expression, as follows:

```js
import { defineConfig } from "vite";
import obfuscator from "vite-mahlzeit-obfuscator";

export default defineConfig({
  plugins: [
    obfuscator({
      includeRegEx: /^[\w,\s-]+\.[A-Za-z]{3}$/, // 👈 just an example
    }),
  ],
});
```

If you want to pass obfuscator options, you can do it like this:

```js
import { defineConfig } from "vite";
import obfuscator from "vite-mahlzeit-obfuscator";

export default defineConfig({
  plugins: [
    obfuscator({
      options: {
        compact: true,
        simplify: true,
        stringArrayShuffle: true,
      },
    }),
  ],
});
```

## Credits

This package was inspired by the following projects:

- [rollup-obfuscator](https://github.com/ghostdevv/rollup-obfuscator)
- [vite-plugin-javascript-obfuscator](https://github.com/elmeet/vite-plugin-javascript-obfuscator)

## License

[MIT](https://choosealicense.com/licenses/mit/)
