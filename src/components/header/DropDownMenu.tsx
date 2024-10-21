import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./Header.module.scss";

const DropDownMenu: React.FC<React.HTMLAttributes<HTMLDivElement>&{
    title?: string;
    rootURL?: string;
}> = ({
    children,
    className="",
    title,
    rootURL=""
}) => {
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

export default DropDownMenu;