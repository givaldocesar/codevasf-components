'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import IBaseProps from "../interfaces";
import styles from "./Header.module.scss";

interface IProps extends IBaseProps {
    href: string
}

export default function Menu({href, className='', children}: IProps){
    const currentPath = usePathname();

    return (
        <Link href={href} className={
            classNames({
                [styles.menu]: true,
                [styles.active]: href === currentPath,
                [className]: Boolean(className)
            })
        }>
            { children }
        </Link>
    );
}