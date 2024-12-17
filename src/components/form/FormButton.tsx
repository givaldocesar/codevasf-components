import React from "react";
import { BaseButton } from "../buttons";
import styles from "./Form.module.scss";

export default function FormButton({
    children,
    className="",
    type="button",
    ...props
} : React.ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <BaseButton 
            className={`${styles.button} ${className}`} 
            type={type}
            {...props}
        >
            { children }
        </BaseButton>
    );
}