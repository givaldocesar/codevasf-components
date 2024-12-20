import React from "react";
import styles from "./Components.module.scss";

export default function SpinLoader({
    className="",
    ...props
}: React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.spin_loader} ${className}`} {...props}/>
    );
}