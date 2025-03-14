'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Components.module.scss.js';

function SpinLoader({ className = "", ...props }) {
    return (jsx("div", { className: `${styles.spin_loader} ${className}`, ...props }));
}

export { SpinLoader as default };
//# sourceMappingURL=SpinLoader.js.map
