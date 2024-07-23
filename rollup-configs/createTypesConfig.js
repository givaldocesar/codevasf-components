import { dts } from "rollup-plugin-dts";

export default function createTypesConfig({input, file}){
    return {
        input: input,
        output: [
            {
                file: file[0], 
                format: "esm"
            }
        ],
        plugins: [dts()],
        external: ["react", "react-dom"]
    }
}