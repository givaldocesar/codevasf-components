import styles from "./Form.module.scss";

const BaseInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
    className="",
    ...props
}) => {
    return (
        <input className={`${styles.input} ${className}`} {...props} />
    );
}

export default BaseInput;