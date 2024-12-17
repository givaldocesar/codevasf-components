import React, { useRef, useEffect } from "react";
import styles from "./Cards.module.scss";

export default function CardsArea({
    className="", 
    children
} : React.HTMLAttributes<HTMLDivElement>){
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

export { CardsArea };
export { default as Card } from "./Card";
export { default as CardContent } from "./CardContent";