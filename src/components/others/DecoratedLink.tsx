import Link from "next/link";
import styles from "./Components.module.scss";

const DecoratedLink:  React.FC<React.LinkHTMLAttributes<HTMLLinkElement>&{
    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop'
}> = ({
    children,
    className="",
    href="",
    target,
    rel
}) => {
    return (
        <Link className={`${styles.link} ${className}`} href={href} rel={rel} target={target}>
            {children}
        </Link>
    );
}

export default DecoratedLink;