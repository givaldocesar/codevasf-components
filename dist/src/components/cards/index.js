'use client'
import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import styles from './Cards.module.scss.js';

function CardsArea({ className = "", children }) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current?.addEventListener("click", (evt) => {
            evt.stopPropagation();
            const target = evt.target;
            const cards = ref.current?.children;
            if (!cards) {
                return;
            }
            if (evt.target === ref.current) {
                for (let i = 0; i < cards.length; i++) {
                    cards.item(i)?.classList.remove(styles.active);
                }
            }
            else {
                for (let i = 0; i < cards.length; i++) {
                    cards.item(i)?.classList.remove(styles.active);
                }
                target.classList.add(styles.active);
            }
        });
    }, []);
    return (jsx("div", { className: `${styles.area} ${className}`, ref: ref, children: children }));
}

export { CardsArea, CardsArea as default };
//# sourceMappingURL=index.js.map
