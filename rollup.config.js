import path from "path";
import { createCJSConfig, createTypesConfig } from "./rollup-configs/index.js";
import packageJSON from "./package.json";

export default [
    createCJSConfig({
        input: "./src/components/index.ts", 
        file: packageJSON.exports["."],
        extract: path.resolve("./dist/codevasf-styles.css")
    }),
    createTypesConfig({
        input: "src/components/index.ts",
        file: packageJSON.typesVersions["*"]["."]
    }),
    createCJSConfig({
        input: "./src/components/header/index.tsx", 
        file: packageJSON.exports["./header"],
        named: true
    }),
    createTypesConfig({
        input: "src/components/header/index.tsx",
        file: packageJSON.typesVersions["*"]["header"]
    })
];