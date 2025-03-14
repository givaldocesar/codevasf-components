'use client'
import { jsx } from 'react/jsx-runtime';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './Header.module.scss.js';

function Menu({ href = '', children }) {
    const currentPath = usePathname();
    return (jsx(Link, { href: href, className: classNames({
            [styles.menu]: true,
            [styles.active]: href === currentPath
        }), children: children }));
}

export { Menu as default };
//# sourceMappingURL=Menu.js.map
