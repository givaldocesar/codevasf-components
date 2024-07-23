import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { MenuProps } from "./Header.types";

const Menu: React.FC<MenuProps> = ({href, className='', children}) => {
    const currentPath = usePathname();

    return (
        <Link href={href} className={
            classNames({
                "px-5 flex items-center justify-center font-bold text-white hover:bg-hover": true,
                "bg-active": href === currentPath,
                [className]: Boolean(className)
            })
        }>
            { children }
        </Link>
    );
}

export default Menu;