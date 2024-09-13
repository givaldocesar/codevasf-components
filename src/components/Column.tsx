import styles from './Components.module.scss';

const Column: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children, ...props}) => {
    return (
        <div className={`${styles.column} ${className}`} {...props}>
            { children }
        </div>
    );
}

export default Column;