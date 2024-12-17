import React from "react";
import styles from "./Form.module.scss";

export default function FormLabel({
    children, 
    className="",
    ...props
} : React.LabelHTMLAttributes<HTMLLabelElement>){
    return (
        <label className={`${styles.label} ${className}`} {...props}>
            { children }
        </label>
    );
}