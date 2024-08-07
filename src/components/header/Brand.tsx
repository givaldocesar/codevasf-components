import Image from "next/image";
import styles from "./Header.module.scss";
import icon from "../../assets/icons/codevasf_icon.png";

const Brand: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    return (
        <div className={`${styles.brand} ${className}`}>
            <Image
                src={icon}
                width={42} 
                height={42} 
                alt={"codevasf_icon"}
            />
            <span>
                {children}
            </span>
        </div>
    );
}

export default Brand;