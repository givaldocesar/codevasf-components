import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./Header.module.scss";

export default function Menu({
    href='', 
    children
} : React.LinkHTMLAttributes<HTMLLinkElement>){
    const currentPath = usePathname();

    return (
        <Link href={href} className={
            classNames({
                [styles.menu]: true,
                [styles.active]: href === currentPath
            })
        }>
            { children }
        </Link>
    );
}