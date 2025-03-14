'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import styles from './Icons.module.scss.js';

function CloseIcon({ className = "", ...props }) {
    return (jsxs("svg", { viewBox: "0 0 50 50", className: `${styles.close} ${className}`, ...props, children: [jsx("line", { x1: 10, y1: 10, x2: 40, y2: 40 }), jsx("line", { x1: 40, y1: 10, x2: 10, y2: 40 })] }));
}

export { CloseIcon as default };
//# sourceMappingURL=CloseIcon.js.map
