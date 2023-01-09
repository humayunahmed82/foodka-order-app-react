import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealsItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className="flex justify-between m-4 pb-4 border-b border-solid border-[#ccc]">
            <div className="">
                <h3 className="text-lg font-bold">{props.name}</h3>
                <p className="italic font-medium">{props.description}</p>
                <p className="mt-1 font-bold text-price text-xl">{price}</p>
            </div>
            <div className="">
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealsItem;
