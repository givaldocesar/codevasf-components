import React, { useState } from "react";
import Image from "next/image";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import styles from "./Form.module.scss";

import visible_icon from "../../assets/icons/password-view.png";
import hidden_icon from "../../assets/icons/password-hidden.png";


export default function FormPassword({
    className,
    inputClassName="",
    buttonClassName="",
    ...props
} : React.InputHTMLAttributes<HTMLInputElement> & {
    inputClassName?: string;
    buttonClassName?: string;
}){
    const [visible, setVisible] = useState<boolean>(false);
    
    return (
        <FormRow className={className}>
            <FormInput 
                className={`${styles.password} ${inputClassName}`}
                name="password" 
                autoComplete="current-password"
                type={visible ? "text" : "password"}
                {...props} 
            />
            <button 
                type="button"
                title={visible ? "Ocultar Senha" : "Mostra Senha"}
                className={`${styles.password_button} ${buttonClassName}`}
                onClick={() => setVisible(!visible)}
            >
                <Image 
                    src={visible ? hidden_icon : visible_icon}
                    width={48}
                    height={48}
                    alt="password-hidden"
                />
            </button>
        </FormRow>
    );
}