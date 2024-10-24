import styles from "./Form.module.scss";

const FormTitle: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
    children,
    className=""
}) => {
    return (
        <span className={`${styles.title} ${className}`}>
            { children }
        </span>
    );
}

export default FormTitle;