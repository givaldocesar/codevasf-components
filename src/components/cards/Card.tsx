import React from "react";
import styles from "./Cards.module.scss";

export default function Card({
    className="", 
    children
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.overlayer} />
            { children }
        </div>
    );
}