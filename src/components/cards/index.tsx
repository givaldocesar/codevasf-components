import React from "react";
import "../globals.css";

const CardsArea: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    const tailwind = "p-3 " + className;

    return (
        <div className={tailwind}>
            { children }
        </div>
    );
}

export default CardsArea;
export { default as Card } from "./Card";