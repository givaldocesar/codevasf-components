import React from 'react';
import styles from './Components.module.scss';

export default function Column({
    className="", 
    children, 
    ...props
} : React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={`${styles.column} ${className}`} {...props}>
            { children }
        </div>
    );
}