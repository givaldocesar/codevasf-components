import styles from "./Form.module.scss";

const FormRow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className=""
}) => {
    return (
        <div className={`${styles.row} ${className}`}>
            { children }
        </div>
    );
}

export default FormRow;