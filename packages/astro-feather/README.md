# astro-feather

Simply beautiful open source icons as Astro components (basically an Astro wrapper for [Feather](https://feathericons.com/)). With full type-safety support for props.

## Install

With npm:

```sh
# with npm
npm install astro-feather

# with yarn
yarn add astro-feather

# with pnpm
pnpm install astro-feather
```

## Usage

```astro
---
// import only what you need
import { FeatherIcon } from 'astro-feather';
---
<FeatherIcon />
```

Alternatively, if you really want to import everything you can do:

```astro
---
import * as AstroFeather from 'astro-feather'
---
<AstroFeather.FeatherIcon />
```

### Props

`astro-feather` supports the following `props`, which are mapped to the SVG element under the hood. Note that **all** `props` are optional.

| Name             | Type                                         | Default value    | Description                                                                                                |
| ---------------- | -------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `size`           | `number`                                     | `24`             | Sets `size` for both `width` and `height` for the icon.                                                    |
| `width`          | `number`                                     | `24`             | Sets `width` for the icon, overrides `size` iif provided.                                                  |
| `height`         | `number`                                     | `24`             | Sets `height` for the icon, overrides `size` if provided.                                                  |
| `strokeWidth`    | `number`                                     | `2`              | Sets `stroke-width` for the icon.                                                                          |
| `stroke`         | `string`                                     | `"currentColor"` | Sets `stroke` for the icon.                                                                                |
| `strokeLinecap`  | `"round" \| "butt" \| "square" \| "inherit"` | `"round"`        | Sets `stroke-linecap` for the icon.                                                                        |
| `strokeLinejoin` | `"round" \| "inherit" \| "miter" \| "bevel"` | `"round"`        | Sets `stroke-linejoin` for the icon.                                                                       |
| `fill`           | `string`                                     | `"none"`         | Sets `fill` for the icon.                                                                                  |
| `viewBox`        | `string`                                     | `"0 0 24 24"`    | Sets `viewBox` for the icon.                                                                               |
| `customClasses`  | `string`                                     | `""`             | Allows you to set custom classes to the icon, which appends to the built-in `"feather feather-x"` classes. |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b shiny-new-feature`
3. Commit your changes: `git commit -am 'feat: add some feature'`
4. Push to the branch: `git push origin shiny-new-feature`
5. Submit a PR.
