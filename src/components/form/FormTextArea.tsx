import classNames from "classnames";
import styles from "./Form.module.scss";

export default function TextArea({
    children,
    className="", 
    rows=10, 
    maxLength=2048,
    ...props
} : React.TextareaHTMLAttributes<HTMLTextAreaElement>){
    
    return (
        <textarea 
            className={classNames({
                [styles.text_area]: true,
                [className]: className !== "" ? true : false
            })} 
            rows={rows} 
            cols={50} 
            maxLength={maxLength} 
            spellCheck={true} 
            {...props}
        >
            {children}
        </textarea>
    );
}