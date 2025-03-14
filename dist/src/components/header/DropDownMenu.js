'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './Header.module.scss.js';

function DropDownMenu({ children, className = "", title, rootURL = "" }) {
    const currentPath = usePathname();
    return (jsxs("div", { className: classNames({
            [styles.dropdown]: true,
            [styles.active]: currentPath.split("/").includes(rootURL),
            [className]: className !== "" ? true : false,
        }), children: [jsx("span", { children: title }), jsx("div", { className: styles.dropped_menus, children: children })] }));
}

export { DropDownMenu as default };
//# sourceMappingURL=DropDownMenu.js.map
