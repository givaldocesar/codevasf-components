import React, { forwardRef } from "react";
import styles from "./Form.module.scss";

const FormInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({
    className="",
    ...props
}, ref) => {
    return (
        <input 
            ref={ref}
            className={`${styles.input} ${className}`} 
            {...props} 
        />
    );
});

export default FormInput;