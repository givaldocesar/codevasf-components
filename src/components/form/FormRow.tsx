import React from "react";
import styles from "./Form.module.scss";

export default function FormRow({
    children,
    className=""
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.row} ${className}`}>
            { children }
        </div>
    );
}