import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

import packageJSON from "./package.json";

export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        file: packageJSON.exports['.'],
        format: "cjs",
        sourcemap: true,
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({tsconfig: "./tsconfig.json"}),
      postcss(),
      image(),
    ],
  },
  {
    input: "src/components/header/index.ts",
    output: [
      {
        file: packageJSON.exports['./header'],
        format: "cjs",
        sourcemap: true,
        exports: "named"
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({tsconfig: "./tsconfig.json"}),
      postcss(),
      image(),
    ]
  },
];