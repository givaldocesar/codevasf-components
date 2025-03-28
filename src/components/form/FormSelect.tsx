import React, { forwardRef } from "react";
import styles from "./Form.module.scss";

const FormSelect = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({
    className="",
    children,
    ...props
}, ref) => {
    return (
        <select 
            ref={ref}
            className={`${styles.select} ${className}`} 
            {...props} 
        >
            {children}
        </select>
    );
});

export default FormSelect;