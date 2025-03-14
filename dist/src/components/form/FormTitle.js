'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Form.module.scss.js';

function FormTitle({ children, className = "" }) {
    return (jsx("span", { className: `${styles.title} ${className}`, children: children }));
}

export { FormTitle as default };
//# sourceMappingURL=FormTitle.js.map
