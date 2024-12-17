import React from "react";
import { RemoveButton } from "../buttons";
import { PopupEvent } from "../events";
import styles from "./Components.module.scss";

interface PopupProps extends React.HTMLAttributes<HTMLDivElement>{
    contentClassName: string
}

export default function Popup({
    children,
    className="",
    contentClassName=""
} : PopupProps){
    function close(evt: React.MouseEvent<HTMLOrSVGElement, MouseEvent>){
        evt.target.dispatchEvent(new PopupEvent(null));
    }
    
    return (
        <div className={`${styles.popup} ${className}`}>
            <div className={styles.overlay} />
            <div className={`${styles.content} ${contentClassName}`}>
                <RemoveButton className={styles.close_button} title="Fechar" onClick={close}/>
                { children }
            </div>
        </div>
    );
}