import styles from "./Form.module.scss";

const FormLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
    children, 
    className="",
    ...props
}) => {
    return (
        <label className={`${styles.label} ${className}`} {...props}>
            { children }
        </label>
    );
}

export default FormLabel;