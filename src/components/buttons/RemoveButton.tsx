import BaseButton from "./BaseButton";
import styles from "./Button.module.scss";

const RemoveButton: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({
    className="",
    ...props
}) => {
    return (
        <BaseButton 
            className={`${styles.remove_button} ${className}`} 
            {...props}
        >
            <svg viewBox="0 0 50 50">
                <line x1={10} y1={10} x2={40} y2={40} />
                <line x1={40} y1={10} x2={10} y2={40} />
            </svg>
        </BaseButton>
    );
}

export default RemoveButton;