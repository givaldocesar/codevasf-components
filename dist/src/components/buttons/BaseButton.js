'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Button.module.scss.js';

function BaseButton({ children, className, ...props }) {
    return (jsx("button", { className: `${styles.button} ${className}`, ...props, children: children }));
}

export { BaseButton as default };
//# sourceMappingURL=BaseButton.js.map
