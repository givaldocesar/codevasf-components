import { useRef, useEffect } from "react";
import styles from "./Cards.module.scss";

const CardsArea: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.addEventListener("click", (evt) => {
            evt.stopPropagation();
            const target = evt.target as Element;
            const cards = ref.current?.children;
            
            if(!cards){ return }

            if(evt.target === ref.current){
                for(let i = 0; i < cards.length; i++){
                    cards.item(i)?.classList.remove(styles.active);
                }
            
            } else {
                for(let i = 0; i < cards.length; i++){
                    cards.item(i)?.classList.remove(styles.active);
                }
                
                target.classList.add(styles.active);
            }

        });
    }, []);
    
    return (
        <div className={`${styles.area} ${className}`} ref={ref}>
            { children }
        </div>
    );
}

export default CardsArea;
export { default as Card } from "./Card";
export { default as CardContent } from "./CardContent";