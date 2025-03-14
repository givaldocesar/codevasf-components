'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import styles from './Cards.module.scss.js';

function Card({ className = "", children }) {
    return (jsxs("div", { className: `${styles.card} ${className}`, children: [jsx("div", { className: styles.overlayer }), children] }));
}

export { Card as default };
//# sourceMappingURL=Card.js.map
