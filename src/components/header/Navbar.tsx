import { useRef } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import icon from "../../assets/icons/menu.png";


const Navbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) => {
    const menus = useRef<HTMLDivElement>(null);

    function changeVisibility(evt: React.MouseEvent<HTMLButtonElement>){ 
        (evt.target as HTMLButtonElement).classList.toggle(styles.button_active);
        menus.current?.classList.toggle(styles.show) 
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.menus} ref={menus}>
                { children }
            </div>

            { !children ? null :
                <button className={styles.button} onClick={changeVisibility}>
                    <Image src={icon} alt='menu-bar' width={48} height={48} />
                </button>
            }
        </div>
    );
}

export default Navbar;