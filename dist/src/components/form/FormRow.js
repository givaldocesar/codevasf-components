'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Form.module.scss.js';

function FormRow({ children, className = "" }) {
    return (jsx("div", { className: `${styles.row} ${className}`, children: children }));
}

export { FormRow as default };
//# sourceMappingURL=FormRow.js.map
