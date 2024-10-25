import styles from "./Components.module.scss";

const ProgressBar: React.FC<React.HTMLAttributes<HTMLDivElement>&{
    barClassName?: string;
    progress?: number;
    infinity?:boolean;
}> = ({
    className="",
    barClassName="",
    progress=0,
    infinity
}) => {

    if(infinity){
        return (
            <div className={`${styles.progress} ${className}`} title="Carregando...">
                <div className={`${styles.piston} ${styles.infinity} ${barClassName}`} />
            </div>
        );
    } 

    return (
        <div className={`${styles.progress} ${className}`} title={`${progress}%`}>
            <div className={`${styles.piston} ${barClassName}`} style={{width: `${progress}%`}}/>
        </div>
    );
}

export default ProgressBar;