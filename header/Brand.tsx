import React from "react";
import Image from "next/image";
import IBaseProps from "../interfaces";
import styles from "./Header.module.scss";
import icon from "../assets/codevasf_icon.png";

export default function Brand({className="", children} : IBaseProps){
    return (
        <div className={`${styles.brand} ${className}`}>
            <Image src={icon} width={42} height={42} alt={"codevasf_icon"}/>
            <span>{children}</span>
        </div>
    );
}