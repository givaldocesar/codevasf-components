'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss.js';
import img from '../../assets/icons/menu.png.js';

function Navbar({ children, className = "" }) {
    const menus = useRef(null);
    function changeVisibility(evt) {
        evt.target.classList.toggle(styles.button_active);
        menus.current?.classList.toggle(styles.show);
    }
    return (jsxs("div", { className: `${styles.navbar} ${className}`, children: [jsx("div", { className: styles.menus, ref: menus, children: children }), !children ? null :
                jsx("button", { className: styles.button, onClick: changeVisibility, children: jsx(Image, { src: img, alt: 'menu-bar', width: 48, height: 48 }) })] }));
}

export { Navbar as default };
//# sourceMappingURL=Navbar.js.map
