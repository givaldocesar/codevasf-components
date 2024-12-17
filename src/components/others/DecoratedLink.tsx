import React from "react";
import Link from "next/link";
import styles from "./Components.module.scss";

interface DecoratedLinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
}

function DecoratedLink({
    children,
    className="",
    href="",
    target,
    rel
} : DecoratedLinkProps){
    return (
        <Link className={`${styles.link} ${className}`} href={href} rel={rel} target={target}>
            {children}
        </Link>
    );
}

export default DecoratedLink;