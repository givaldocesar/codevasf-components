import React from "react";
import BaseProps from "../interfaces";

const Title: React.FC<BaseProps> = ({className="", children}) => {
    let tailwind = "font-bold text-xl text-std border-b-2 border-std ";
    tailwind += className;
    
    return (
        <h3 className={tailwind}>
            { children }
        </h3>
    );
}

export default Title;