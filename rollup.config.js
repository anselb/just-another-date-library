import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [
      terser(),
    ],
    output: {
      file: 'umd/just-another-date-library.js',
      format: 'umd',
      name: 'justAnotherDateLibrary',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm',
    },
  },
];
