'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Form.module.scss.js';

function FormLabel({ children, className = "", ...props }) {
    return (jsx("label", { className: `${styles.label} ${className}`, ...props, children: children }));
}

export { FormLabel as default };
//# sourceMappingURL=FormLabel.js.map
