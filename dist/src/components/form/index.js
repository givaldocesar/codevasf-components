'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Form.module.scss.js';
import 'react';
import 'next/image';

function Form({ children, className = "" }) {
    return (jsx("form", { className: `${styles.form} ${className}`, children: children }));
}

export { Form, Form as default };
//# sourceMappingURL=index.js.map
