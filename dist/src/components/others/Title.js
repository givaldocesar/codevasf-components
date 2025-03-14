'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Components.module.scss.js';

function Title({ className = "", children }) {
    return (jsx("h3", { className: `${styles.title} ${className}`, children: children }));
}

export { Title as default };
//# sourceMappingURL=Title.js.map
