'use client'
import { jsx } from 'react/jsx-runtime';
import Link from 'next/link';
import styles from './Components.module.scss.js';

function DecoratedLink({ children, className = "", href = "", target, rel }) {
    return (jsx(Link, { className: `${styles.link} ${className}`, href: href, rel: rel, target: target, children: children }));
}

export { DecoratedLink as default };
//# sourceMappingURL=DecoratedLink.js.map
