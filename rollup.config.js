import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import rollupTypes from './rollup-types.js';

export default [
    {
        input: "src/components/index.ts",
        output: [
            {
                file: `dist/index.js`,
                format: 'esm',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            image(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss( {extract: `styles_components.css`} ) 
        ]
    },
    rollupTypes({input: "src/components/index.ts", name: "index"}),
    rollupTypes({input: "src/components/cards/index.tsx", name: "cards"}),
    rollupTypes({input: "src/components/header/index.tsx", name: "header"})
]