import rollupConfig from "./utils/rollup-config.js";

export default [
    ...rollupConfig({
        input: './src/components/index.ts',
        output: 'index',
        cssAndTypes: 'components'
    }),
    ...rollupConfig({
        input: './src/components/header/index.tsx',
        output: 'header/index',
        cssAndTypes: 'header'
    }),
    ...rollupConfig({
        input: './src/components/cards/index.tsx',
        output: 'cards/index',
        cssAndTypes: 'cards'
    }),
]