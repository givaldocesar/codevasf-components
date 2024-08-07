import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import icon from "../../assets/icons/menu.png";


const Navbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(window.innerWidth > 960);
        
        function resize(){ if(window.innerWidth > 960) setShow(true)}
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.menus} style={{display: show ? "flex" : "none"}}>
                { children }
            </div>

            { !children ? null :
                <button 
                    className={styles.button}
                    onClick={evt => setShow(!show)}
                >
                    <Image src={icon} alt='menu-bar' width={48} height={48} />
                </button>
            }
        </div>
    );
}

export default Navbar;