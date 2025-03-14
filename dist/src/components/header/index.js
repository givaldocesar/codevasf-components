'use client'
import { jsx } from 'react/jsx-runtime';
import styles from './Header.module.scss.js';
import 'next/image';
import 'react';
import 'next/navigation';
import 'classnames';
import 'next/link';

function Header({ className = "", children }) {
    return (jsx("div", { className: `${styles.header} ${className}`, children: children }));
}

export { Header, Header as default };
//# sourceMappingURL=index.js.map
