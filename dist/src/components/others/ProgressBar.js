'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Components.module.scss.js';

function ProgressBar({ className = "", barClassName = "", progress = 0, infinity }) {
    if (infinity) {
        return (jsx("div", { className: `${styles.progress} ${className}`, title: "Carregando...", children: jsx("div", { className: `${styles.piston} ${styles.infinity} ${barClassName}` }) }));
    }
    return (jsx("div", { className: `${styles.progress} ${className}`, title: `${progress}%`, children: jsx("div", { className: `${styles.piston} ${barClassName}`, style: { width: `${progress}%` } }) }));
}

export { ProgressBar as default };
//# sourceMappingURL=ProgressBar.js.map
