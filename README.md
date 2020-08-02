# 👨‍🎨 tpcs.js — Turbo-Powered Color Schemes

<a href="https://www.npmjs.com/package/tpcs.js">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/tpcs.js.svg?style=flat" />
</a>
<a href="https://www.npmjs.com/package/tpcs.js">
    <img alt="npm version" src="https://img.shields.io/npm/v/tpcs.js.svg?style=flat" />
</a>
<a href="./LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg" />
</a>

---

[Turbo](https://ai.googleblog.com/2019/08/turbo-improved-rainbow-colormap-for.html) is a rainbow colormap

tpcs.js is based on [Rex Riepe's TPCS for LESS](https://github.com/rexriepe/tpcs) (and his [demo site](https://rexriepe.github.io/tpcs/))

## Install

```
npm install --save tpcs.js
```

## Usage

WIP

---

## Contributing

Clone this repository and install its dependencies:

```bash
git clone https://github.com/Knogobert/tpcs.js
cd tpcs.js
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/tpcs.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/tpcs.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/tpcs.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`node -r esm "./src/tpcs.js"` to run the file directly in node with esm module support.
