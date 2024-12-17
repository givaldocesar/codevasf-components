import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./Header.module.scss";

interface DropDownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    rootURL?: string;
}

export default function DropDownMenu({
    children,
    className="",
    title,
    rootURL=""
} : DropDownMenuProps ){
    const currentPath = usePathname();

    return (
        <div className={classNames({
            [styles.dropdown]: true,
            [styles.active]: currentPath.split("\\").includes(rootURL),
            [className]: className !== "" ? true : false,
        })}>
            <span>{title}</span>
            <div className={styles.dropped_menus}>
                { children }
            </div>
        </div>
    );
}