'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Components.module.scss.js';

function Column({ className = "", children, ...props }) {
    return (jsx("div", { className: `${styles.column} ${className}`, ...props, children: children }));
}

export { Column as default };
//# sourceMappingURL=Column.js.map
