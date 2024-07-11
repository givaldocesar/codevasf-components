import React from "react";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Menu from "./Menu";
import IBaseProps from "../interfaces";
import styles from "./Header.module.scss";


const Header = ({className='', children} : IBaseProps) => {
    return (
        <div className={`${styles.header} ${className}`}>
            { children }
        </div>
    );
}

export default Header;
export {
    Brand,
    Navbar,
    Menu
}
