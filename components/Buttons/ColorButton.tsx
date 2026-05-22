
export interface ColorButtonType {
    color: "black" | "green" | "creamy" | "gray";
    clickHandler:(e:React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Returns circle color button
 * @author Siavash Araghi
 */
export default function ColorButton({color,clickHandler}:ColorButtonType){
    const COLOR = {
        black: "bg-stone-950",
        green: "bg-lime-600",
        creamy:'bg-orange-200',
        gray: "bg-gray-500"
    }
    return <button onClick={clickHandler} data-color={color} className={`w-8 h-8 ${COLOR[color]} cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}></button>
}