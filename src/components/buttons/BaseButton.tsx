import React from "react";
import styles from "./Button.module.scss";

export default function BaseButton({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button
            className={`${styles.button} ${className}`} 
            {...props}
        >
            { children }
        </button>
    );
}