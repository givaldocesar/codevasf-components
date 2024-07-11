import IBaseProps from "../interfaces";
interface IProps extends IBaseProps {
    href: string;
}
export default function Menu({ href, className, children }: IProps): import("react").JSX.Element;
export {};
