import styles from "./Cards.module.scss";

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    return (
        <div className={`${styles.content} ${className}`}>
            { children }
        </div>
    );
}

export default CardContent;