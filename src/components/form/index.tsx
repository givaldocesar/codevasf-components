import styles from "./Form.module.scss";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({
    children,
    className=""
}) => {
    return (
        <form className={`${styles.form} ${className}`}>
            { children }
        </form>
    );
}

export default Form;
export { Form };
export { default as FormButton } from "./FormButton";
export { default as FormInput } from "./FormInput";
export { default as FormLabel } from "./FormLabel";
export { default as FormRow } from "./FormRow";
export { default as FormTitle } from "./FormTitle";