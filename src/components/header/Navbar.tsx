import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";
import icon from "../../assets/icons/menu.png";


const Navbar: React.FC<HeaderProps> = ({children, className}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        window.addEventListener("resize", (evt) => {
            if(window.innerWidth > 960) setShow(true);
        });
    });

    return (
        <div className={`${styles.navbar} ${className || ""}`}>
            <div className={`${styles.menus_area} ${!show ? styles.hide : ''}`}>
                { children }
            </div>

            { !children ? null :
                <div className={`${styles.menu_bars}`} onClick={evt => setShow(!show)}>
                    <Image  src={icon} width={48} height={48} alt='menu-bar' />
                </div>
            }
        </div>
    );
}

export default Navbar;