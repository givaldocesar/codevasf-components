import styles from "./Components.module.scss";


export default function ProgressBar({
    className="",
    barClassName="",
    progress=0,
    infinity
} : {
    className?: string;
    barClassName?: string;
    progress?: number;
    infinity?:boolean;
}){

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