import React from "react";
import styles from "./Header.module.scss";

export default function Header({
    className="", 
    children
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.header} ${className}`}>
            { children }
        </div>
    );
}

export { Header };
export { default as Brand } from "./Brand";
export { default as Navbar } from "./Navbar";
export { default as DropDownMenu } from "./DropDownMenu";
export { default as Menu } from "./Menu";