import { CloseIcon } from "../icons";
import BaseButton from "./BaseButton";
import styles from "./Button.module.scss";

export default function ClosePopupButton({
    className="",
    ...props
} : React.ButtonHTMLAttributes<HTMLButtonElement>){
    
    return (
        <BaseButton 
            className={`${styles.close_button} ${className}`}
            { ...props }
        >
            <CloseIcon />
        </BaseButton>
    );
}