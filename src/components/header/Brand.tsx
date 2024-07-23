import React from "react";
import { HeaderProps } from "./Header.types";
import icon from "../../assets/icons/codevasf_icon.png";

const Brand: React.FC<HeaderProps> = ({className="", children}) => {
    let tailwind = "px-1 h-full flex items-center gap-3 flex-1 lg:min-w-sidebar lg:flex-none ";
    tailwind += className;
    
    return (
        <div className={tailwind}>
            <img 
                className="border border-white"
                src={icon} 
                width={42} 
                height={42} 
                alt={"codevasf_icon"}
            />
            <span className="flex-1 text-2xl text-white font-bold">
                {children}
            </span>
        </div>
    );
}

export default Brand;