import React from "react";
import styles from "./Form.module.scss";

export default function FormTitle({
    children,
    className=""
} : React.HTMLAttributes<HTMLSpanElement>){
    return (
        <span className={`${styles.title} ${className}`}>
            { children }
        </span>
    );
}