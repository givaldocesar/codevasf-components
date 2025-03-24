import React from "react";
import styles from "./Cards.module.scss";

export default function Card({
    className="", 
    children,
    ...props
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.card} ${className}`} {...props}>
            <div className={styles.overlayer} />
            { children }
        </div>
    );
}