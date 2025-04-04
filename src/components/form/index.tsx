import React from "react";
import styles from "./Form.module.scss";

export default function Form({
    children,
    className="", 
    ...props
} : React.FormHTMLAttributes<HTMLFormElement>){
    return (
        <form className={`${styles.form} ${className}`} {...props}>
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
export { default as FormSelect } from "./FormSelect";
export { default as FormTextArea } from "./FormTextArea";
export { default as FormTitle } from "./FormTitle";
export { checkCNPJ } from "./utils";