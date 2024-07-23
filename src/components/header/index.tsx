import React from "react";
import { HeaderProps } from "./Header.types";
import "../globals.css";

const Header: React.FC<HeaderProps> = ({className="", children}) => {
    let tailwind = "flex h-12 bg-std";
    tailwind += className;
    
    return (
        <div className={tailwind}>
            { children }
        </div>
    );
}

export default Header;
export { default as Brand } from "./Brand";
export { default as Navbar } from "./Navbar";
export { default as Menu } from "./Menu";