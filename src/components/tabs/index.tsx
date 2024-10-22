import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Tabs.module.scss";

const TabsArea: React.FC<React.HTMLAttributes<HTMLDivElement>&{
    tabsClassname?: string;
    items?: {title?: string, content?: React.ReactNode}[];
    defaultTab?: number;
}> = ({
    items=[],
    defaultTab=0,
    className="",
    tabsClassname=""
}) => {
    const [currentTab, setCurrentTab] = useState<number>(defaultTab);

    return (
        <div className={`${styles.area} ${className}`}>
            <div className={`${styles.tabs} ${tabsClassname}`}>
                {items.map((item, index) => 
                    <button 
                        key={`${item.title}_${index}`} 
                        onClick={()=> setCurrentTab(index)}
                        className={classNames({
                            [styles.tab]: true,
                            [styles.tab_active]: currentTab === index
                        })}
                    >
                        {item.title}
                    </button>
                )}
            </div>
            {items.map((item, index) => 
                <div 
                    key={`${item.title}_${index}`} 
                    className={styles.tab_content} 
                    style={{display: currentTab === index ? "inline-block" : "none"}}
                >
                    {item.content}
                </div>
            )}
        </div>
    );
}

export default TabsArea;
export {
    TabsArea
}