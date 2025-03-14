'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Cards.module.scss.js';

function CardContent({ className = "", children }) {
    return (jsx("div", { className: `${styles.content} ${className}`, children: children }));
}

export { CardContent as default };
//# sourceMappingURL=CardContent.js.map
