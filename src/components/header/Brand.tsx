import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import codevasf_icon from "../../assets/icons/codevasf_icon.png";

export default function Brand({
    className="", 
    children
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.brand} ${className}`}>
            <Image
                src={codevasf_icon}
                width={42} 
                height={42} 
                alt={"codevasf_icon"}
            />
            <span>
                {children}
            </span>
        </div>
    );
}