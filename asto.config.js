const { esbuildLoader } = require('asto');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const entry = {
  input: 'src/index.ts',
  output: 'dist/index.js',
  /**
   * @type {import("esbuild").BuildOptions}
   */
  options: {
    format: 'cjs',
    sourcemap: 'external',
    platform: 'node',
  },
};
const entryModule = {
  input: 'src/parse.ts',
  output: 'dist/parse.js',
  /**
   * @type {import("esbuild").BuildOptions}
   */
  options: {
    format: 'cjs',

    platform: 'node',
  },
};

/**
 * @type {import("asto").BuildOptions[]}
 */
module.exports = [
  {
    // core packages
    loader: esbuildLoader({
      // @ts-ignore
      plugins: [nodeExternalsPlugin()],
    }),

    entryPoints: [entry, entryModule],
  },
];
