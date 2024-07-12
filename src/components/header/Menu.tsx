import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { MenuProps } from "./Header.types";
import styles from "./Header.module.scss";

const Menu: React.FC<MenuProps> = ({href, className='', children}) => {
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

export default Menu;