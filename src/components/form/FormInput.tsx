import React from "react";
import styles from "./Form.module.scss";

export default function BaseInput({
    className="",
    ...props
} : React.InputHTMLAttributes<HTMLInputElement>){
    return (
        <input 
            className={`${styles.input} ${className}`} 
            {...props} 
        />
    );
}