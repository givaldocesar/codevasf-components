import React from "react";
import IBaseProps from "../interfaces";
import styles from "./Header.module.scss";

export default function Navbar({className="", children} : IBaseProps){
    return (
        <div className={`${styles.navbar} ${className}`}>
            { children }
        </div>
    );
}