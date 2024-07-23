import React from "react";
import BaseProps from "../interfaces";

const Column: React.FC<BaseProps> = ({className="", children}) => {
    let tailwind = "p-3 flex-1 w-full lg:h-full lg:w-auto ";
    tailwind += className;
    
    return (
        <div className={tailwind}>
            { children }
        </div>
    );
}

export default Column;