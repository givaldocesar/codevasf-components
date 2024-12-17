import React from "react";
import styles from "./Cards.module.scss";

export default function CardContent({
    className="", 
    children
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.content} ${className}`}>
            { children }
        </div>
    );
}