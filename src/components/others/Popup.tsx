import React from "react";
import styles from "./Components.module.scss";

export default function Popup({
    children,
    className="",
    contentClassName="",
} : {
    children?: React.ReactNode;
    className?: string;
    contentClassName?: string;
}){
    return (
        <div className={`${styles.popup} ${className}`}>
            <div className={styles.overlay} />
            <div className={`${styles.content} ${contentClassName}`}>
                { children }
            </div>
        </div>
    );

}