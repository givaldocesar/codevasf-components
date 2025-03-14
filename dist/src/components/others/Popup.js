'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import styles from './Components.module.scss.js';

function Popup({ children, className = "", contentClassName = "", }) {
    return (jsxs("div", { className: `${styles.popup} ${className}`, children: [jsx("div", { className: styles.overlay }), jsx("div", { className: `${styles.content} ${contentClassName}`, children: children })] }));
}

export { Popup as default };
//# sourceMappingURL=Popup.js.map
