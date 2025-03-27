import React from "react";
import styles from "./Form.module.scss";

export default function Form({
    children,
    className=""
} : React.FormHTMLAttributes<HTMLFormElement>){
    return (
        <form className={`${styles.form} ${className}`}>
            { children }
        </form>
    );
}

export { Form };
export { default as CNPJInput } from "./CNPJInput";
export { default as FormButton } from "./FormButton";
export { default as FormInput } from "./FormInput";
export { default as FormLabel } from "./FormLabel";
export { default as FormPassword } from "./FormPassword";
export { default as FormRow } from "./FormRow";
export { default as FormTitle } from "./FormTitle";
export { checkCNPJ } from "./utils";