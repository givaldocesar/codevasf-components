import React, { useState, useEffect } from "react";
import { HeaderProps } from "./Header.types";
import icon from "../../assets/icons/menu.png";


const Navbar: React.FC<HeaderProps> = ({children, className=""}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(window.innerWidth > 960);
        
        function resize(){ if(window.innerWidth > 960) setShow(true)}
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    let tailwind = "border-l-2 border-white flex w-16 lg:w-auto";
    tailwind += className;

    let menuStyle = "flex absolute flex-col top-12 right-0 bg-gray-400 border-2 border-white border-t-0 ";
    menuStyle += "lg:static lg:flex-row lg:bg-transparent lg:border-0 ";
    menuStyle += show ? "": "!hidden";

    return (
        <div className={tailwind}>
            <div className={menuStyle}>
                { children }
            </div>

            { !children ? null :
                <div 
                    className="px-2 hover:cursor-pointer hover:bg-hover lg:hidden" 
                    onClick={evt => setShow(!show)}
                >
                    <img className="invert w-full h-full" src={icon} alt='menu-bar' />
                </div>
            }
        </div>
    );
}

export default Navbar;