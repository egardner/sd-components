# SD-Components

This is a simple example of how to use [Vite](https://vitejs.dev/) to build a
component library without introducing a lot of extra junk. This example is
adapted from [this example](https://github.com/vitejs/vite/tree/main/packages/playground/lib)
in the Vite playground repo.

## Installation
```
npm install
```

## Usage

```
# Run the dev server
npm run dev
```

```
# Generate output
npm run build
```

This example takes advantage of Vite's "library mode" feature:
https://vitejs.dev/guide/build.html#library-mode. As configured, this project
can do the following:

- `vue` dependency is externalized, not included in the build (and handled as a `window.Vue` global for the UMD build).
- Single-file Components are pre-compiled into render functions
- LESS imports are processed and resulting CSS is exported into a separate .css file
- Builds the component library in both ES Module and UMD versions; the latter supports CommonsJS, AMD, and IIFE usage.
