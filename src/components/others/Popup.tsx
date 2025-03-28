import React from "react";
import styles from "./Components.module.scss";

export default function Popup({
    children,
    className="",
    contentClassName="",
    ...props
} : React.HTMLAttributes<HTMLDivElement>&{
    contentClassName?: string;
}){
    return (
        <div className={`${styles.popup} ${className}`} {...props}>
            <div className={styles.overlay} />
            <div className={`${styles.content} ${contentClassName}`}>
                { children }
            </div>
        </div>
    );

}