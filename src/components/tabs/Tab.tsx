import classNames from "classnames";
import styles from "./Tabs.module.scss";

export default function Tab({
    title,
    index,
    currentTab,
    changeTab
} : {
    title?: string;
    index: number;
    currentTab: number;
    changeTab: () => void;
}){
    return (
        <button 
            type="button"
            onClick={changeTab}
            className={classNames({
                [styles.tab]: true,
                [styles.tab_active]: currentTab === index
            })}
        >
            {title}
        </button>
    );
}