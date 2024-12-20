import React from "react";
import styles from "./Icons.module.scss";

export default function CloseIcon({
    className="",
    ...props
}: React.SVGAttributes<HTMLOrSVGElement>){
    return (
        <svg 
            viewBox="0 0 50 50" 
            className={`${styles.close} ${className}`}  
            {...props}
        >
            <line x1={10} y1={10} x2={40} y2={40} />
            <line x1={40} y1={10} x2={10} y2={40} />
        </svg>
    );
}
