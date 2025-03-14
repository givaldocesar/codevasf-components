'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Tabs.module.scss.js';

const TabsArea = forwardRef(({ items = [], defaultTab = 0, className = "", tabsClassname = "" }, ref) => {
    const [currentTab, setCurrentTab] = useState(defaultTab);
    return (jsxs("div", { className: `${styles.area} ${className}`, ref: ref, children: [jsx("div", { className: `${styles.tabs} ${tabsClassname}`, children: items.map((item, index) => jsx("button", { onClick: () => setCurrentTab(index), className: classNames({
                        [styles.tab]: true,
                        [styles.tab_active]: currentTab === index
                    }), children: item.title }, `${item.title}_${index}`)) }), items.map((item, index) => jsx("div", { className: styles.tab_content, style: { display: currentTab === index ? "inline-block" : "none" }, children: item.content }, `${item.title}_${index}`))] }));
});

export { TabsArea, TabsArea as default };
//# sourceMappingURL=index.js.map
