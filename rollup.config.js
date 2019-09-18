import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';
export default {
  input: 'src/main.js',
  output: [
    {file: 'dist/index.js', format: 'umd', sourcemap: true, name: 'index'}
  ],
  plugins: [
    noderesolve(),
    commonjs(),
    babel(),
    uglify()
  ]
};