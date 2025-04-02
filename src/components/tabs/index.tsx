import React, { useState, forwardRef } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import styles from "./Tabs.module.scss";

type Item = {
    title?: string;
    content?: React.ReactNode;
    onActive?: () => void;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement>{
    tabsClassname?: string;
    items?: Item[];
    defaultTab?: number;
}

const TabsArea = forwardRef<HTMLDivElement, TabsProps>(({
    items=[],
    defaultTab=0,
    className="",
    tabsClassname=""
}, ref) => {
    const [currentTab, setCurrentTab] = useState<number>(defaultTab);

    return (
        <div className={`${styles.area} ${className}`} ref={ref}>
            <div className={`${styles.tabs} ${tabsClassname}`}>
                {items.map((item, index) => 
                    <Tab 
                        key={`${item.title}_${index}`}
                        index={index}
                        title={item.title}
                        currentTab={currentTab}
                        changeTab={()=> setCurrentTab(index)}
                    />
                )}
            </div>
            {items.map((item, index) => 
                <TabContent 
                    key={`${item.title}_${index}`}
                    index={index}
                    currentTab={currentTab} 
                    onActive={item.onActive}
                >
                    {item.content}
                </TabContent>
            )}
        </div>
    );
});

export default TabsArea;
export { TabsArea };