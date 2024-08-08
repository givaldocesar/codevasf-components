import styles from "./Cards.module.scss";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.overlayer} />
            { children }
        </div>
    );
}

export default Card;