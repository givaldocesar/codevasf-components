import styles from './Components.module.scss';

const Column: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    return (
        <div className={`${styles.column} ${className}`}>
            { children }
        </div>
    );
}

export default Column;