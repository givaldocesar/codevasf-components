const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className="", children}) => {
    let tailwind = "group relative flex-1 bg-gray-200 rounded-xl overflow-hidden";
    tailwind += " hover:cursor-pointer ";
    tailwind += className;

    let overlayer = "absolute top-0 left-0 w-full h-full bg-black opacity-75";
    overlayer += " transition-all duration-500 hover:opacity-25";
    
    return (
        <div className={tailwind}>
            <div className={overlayer} />
            { children }
        </div>
    );
}

export default Card;