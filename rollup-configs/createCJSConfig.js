import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";


export default function createCJSConfig({input, file, named=false, extract=false}){
    return {
        input: input,
        output: [
            {
                file: file,
                format: "cjs",
                sourcemap: true,
                exports: named ? "named" : undefined
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            image(),
            postcss({
                config: { path: "./postcss.config.js"},
                extensions: ['.css'],
                minimize: true,
                inject: false,
                extract: extract
            }),
            typescript({tsconfig: "./tsconfig.json"}),
        ],
        external: ["react", "react-dom"],
    }
}