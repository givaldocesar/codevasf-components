import React from "react";
import styles from "./Components.module.scss";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement>{
    barClassName?: string;
    progress?: number;
    infinity?:boolean;
}

export default function ProgressBar({
    className="",
    barClassName="",
    progress=0,
    infinity
} : ProgressBarProps){

    if(infinity){
        return (
            <div className={`${styles.progress} ${className}`} title="Carregando...">
                <div className={`${styles.piston} ${styles.infinity} ${barClassName}`} />
            </div>
        );
    } 

    return (
        <div className={`${styles.progress} ${className}`} title={`${progress}%`}>
            <div className={`${styles.piston} ${barClassName}`} style={{width: `${progress}%`}}/>
        </div>
    );
}