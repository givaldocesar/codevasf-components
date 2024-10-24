import BaseButton from "../buttons/BaseButton";
import styles from "./Form.module.scss";

const FormButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className="",
    type="button",
    ...props
}) => {
    return (
        <BaseButton 
            className={`${styles.button} ${className}`} 
            type={type}
            {...props}
        >
            { children }
        </BaseButton>
    );
}

export default FormButton;