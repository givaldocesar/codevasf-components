import React from "react";
import BaseProps from "../interfaces";
import styles from "./Components.module.scss";

const Column: React.FC<BaseProps> = ({className, children}) => {
    return (
        <div className={`${styles.column} ${className || ''}`}>
            { children }
        </div>
    );
}

export default Column;