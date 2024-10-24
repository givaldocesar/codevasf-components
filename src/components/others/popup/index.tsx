import { RemoveButton } from "../../buttons";
import { PopupEvent } from "../../events";
import styles from "./Popup.module.scss";

const Popup: React.FC<React.HTMLAttributes<HTMLDivElement>&{
    contentClassName: string
}> = ({
    children,
    className="",
    contentClassName=""
}) => {
    function close(evt: React.MouseEvent<HTMLOrSVGElement, MouseEvent>){
        evt.target.dispatchEvent(new PopupEvent(null));
    }
    
    return (
        <div className={`${styles.popup} ${className}`}>
            <div className={styles.overlay} />
            <div className={`${styles.content} ${contentClassName}`}>
                <RemoveButton className={styles.close_button} title="Fechar" onClick={close}/>
                { children }
            </div>
        </div>
    );
}

export default Popup;