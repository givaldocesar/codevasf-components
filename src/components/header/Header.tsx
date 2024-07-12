import React from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderProps> = ({className, children}) => {
    return (
        <div className={`${styles.header} ${className || ""}`}>
            { children }
        </div>
    );
}

export default Header;