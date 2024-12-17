import React from "react";
import styles from "./Components.module.scss";

function Title({
    className="", 
    children
} : {
    className?: string;
    children?: React.ReactNode
}){
    return (
        <h3 className={`${styles.title} ${className}`}>
            { children }
        </h3>
    );
}

export default Title;