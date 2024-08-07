import styles from "./Components.module.scss";

const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({className="", children}) => {
    return (
        <h3 className={`${styles.title} ${className}`}>
            { children }
        </h3>
    );
}

export default Title;