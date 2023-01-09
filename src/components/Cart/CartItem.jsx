import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className="flex items-center justify-between border-b-2 border-solid border-primary py-4 my-4">
            <div className="flex-shrink w-full">
                <h2 className="text-2xl font-bold mb-2 text-[#363636]">
                    {props.name}
                </h2>
                <div className="w-40 flex justify-between items-center">
                    <span className="font-bold text-xl text-price">
                        {price}
                    </span>
                    <span className="font-bold text-lg border border-solid border-[#ccc] py-1 px-3 rounded-md text-[#363636]">
                        x {props.amount}
                    </span>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 flex-shrink-0">
                <button
                    className="block font-bold text-sm text-primary border border-solid border-primary px-4 h-8 text-center rounded-md hover:bg-primary hover:text-white active:bg-primary active:text-white transition-all ease-linear duration-200"
                    onClick={props.onRemove}
                >
                    <BsDashLg />
                </button>
                <button
                    className="block font-bold text-sm text-primary border border-solid border-primary px-4 h-8 text-center rounded-md hover:bg-primary hover:text-white active:bg-primary active:text-white transition-all ease-linear duration-200"
                    onClick={props.onAdd}
                >
                    <BsPlusLg />
                </button>
            </div>
        </li>
    );
};

export default CartItem;
