import classNames from "classnames";
import styles from "./Tabs.module.scss";

export default function TabContent({
    index,
    currentTab,
    children,
    onActive
} : {
    index: number;
    currentTab: number;
    children?: React.ReactNode;
    onActive?: () => void;
}){
    if(onActive && currentTab === index) onActive();
    
    return (
        <div 
            className={classNames({
                [styles.tab_content]: true,
                [styles.tab_content_hide]: currentTab !== index
            })} 
        >
            {children}
        </div>
    );
}
