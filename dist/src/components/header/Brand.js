'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import Image from 'next/image';
import styles from './Header.module.scss.js';
import img from '../../assets/icons/codevasf_icon.png.js';

function Brand({ className = "", children }) {
    return (jsxs("div", { className: `${styles.brand} ${className}`, children: [jsx(Image, { src: img, width: 42, height: 42, alt: "codevasf_icon" }), jsx("span", { children: children })] }));
}

export { Brand as default };
//# sourceMappingURL=Brand.js.map
