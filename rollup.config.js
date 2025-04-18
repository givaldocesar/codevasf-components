import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';;

export default [
    {
        input: "./index.ts",
        output: {
            dir: `dist`,
            format: 'esm',
            exports: 'named',
            sourcemap: true,
            banner: "'use client'"
        },
        plugins: [
            external(),
            image(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                extract: `styles_components.css`,
                modules: true,
                use: { sass: { silenceDeprecations: ['legacy-js-api'] }}
            }) 
        ]
    },
    {
        input: "./index.ts",
        output: { file: `dist/index.d.ts`, format: "esm" },
        external: [/\.css$/],
        plugins: [dts()],
    },
    {
        input: "./index_firebase.ts",
        output: {
            file: `dist/firebase/index.js`,
            format: 'esm',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
        ]
    },
    {
        input: "./index_firebase.ts",
        output: { file: `dist/firebase/index.d.ts`, format: "esm" },
        external: [/\.css$/],
        plugins: [dts()],
    },
]