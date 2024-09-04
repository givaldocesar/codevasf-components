import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const Menu: React.FC<React.LinkHTMLAttributes<HTMLLinkElement>> = ({href='', children}) => {
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

export default Menu;