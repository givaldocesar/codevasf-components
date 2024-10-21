import styles from "./Header.module.scss";

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    return (
        <div className={`${styles.header} ${className}`}>
            { children }
        </div>
    );
}

export default Header;
export { Header };
export { default as Brand } from "./Brand";
export { default as Navbar } from "./Navbar";
export { default as DropDownMenu } from "./DropDownMenu";
export { default as Menu } from "./Menu";