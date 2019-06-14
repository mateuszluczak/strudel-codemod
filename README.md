# strudel-codemod

This repository contains codemod scripts to use with [JSCodeshift](https://github.com/facebook/jscodeshift) that help update Strudel.

## Usage

`npx strudel-codemod <transformer> <path>`

## Included Transforms

### `evt-new-syntax`
Converts single argument in `Evt` (e.g., `@Evt('click selector')`) to multiple argument (e.g., `@Evt('click', 'selector')`).

```sh
npx strudel-codemod evt-new-syntax <path>
```

### Recast Options

[Options to recast's printer](https://github.com/benjamn/recast/blob/master/lib/options.js) can be provided
through the `printOptions` command line argument

```sh
npx strudel-codemod <transformer> --printOptions='{"quote":"double"}'
```

## License MIT