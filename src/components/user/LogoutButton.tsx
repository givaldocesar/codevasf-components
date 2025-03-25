import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Authenticator } from "../../libs";
import { FormButton } from "../form";
import { Popup } from "../others";
import { CloseButton } from "../buttons";
import { User } from "./Login";

import styles from "./Login.module.scss";
import icon from "../../assets/icons/logout.png";

export default function LogoutButton({
    className="",
    user,
    authenticator,
    popupParent
} : {
    className?: string;
    user: User | null;
    authenticator: Authenticator;
    popupParent?: HTMLElement;
}){
    const [showPopup, setShowPopup] = useState<boolean>(false);

    async function logoff(){
        const result = await authenticator.signOut();
        if(result) window.location.reload();
    } 
    
    return (
        <div className={`${styles.logout} ${className}`}>
            <span>{user?.displayName || user?.email}</span>
            <div 
                className={styles.icon}
                title="SAIR"
                onClick={() => setShowPopup(true)}
            >
                <Image 
                    src={icon}
                    width={48}
                    height={48}
                    alt="logout-icon"
                />
            </div>
            {showPopup && 
                createPortal(
                    <Popup contentClassName={styles.logout_popup}>
                        <CloseButton className={styles.logout_close_button} onClick={() => setShowPopup(false)} />
                        <span>Deseja Sair?</span>
                        <div className={styles.row}>
                            <FormButton onClick={logoff} >SAIR</FormButton>
                            <FormButton onClick={() => setShowPopup(false)} >CANCELAR</FormButton>
                        </div>
                    </Popup>,
                    popupParent || document.body
                )
            }
        </div>
    );
}