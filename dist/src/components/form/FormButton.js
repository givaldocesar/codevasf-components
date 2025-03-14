'use client'
import { jsx } from 'react/jsx-runtime';
import BaseButton from '../buttons/BaseButton.js';
import styles from './Form.module.scss.js';

function FormButton({ children, className = "", type = "button", ...props }) {
    return (jsx(BaseButton, { className: `${styles.button} ${className}`, type: type, ...props, children: children }));
}

export { FormButton as default };
//# sourceMappingURL=FormButton.js.map
