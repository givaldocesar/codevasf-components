import React from "react";
import BaseProps from "../interfaces";
import styles from "./Components.module.scss";

const Title: React.FC<BaseProps> = ({className, children}) => {
    return (
        <h3 className={`${styles.title} ${className || ''}`}>
            { children }
        </h3>
    );
}

export default Title;