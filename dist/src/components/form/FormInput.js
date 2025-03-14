'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Form.module.scss.js';

function BaseInput({ className = "", ...props }) {
    return (jsx("input", { className: `${styles.input} ${className}`, ...props }));
}

export { BaseInput as default };
//# sourceMappingURL=FormInput.js.map
