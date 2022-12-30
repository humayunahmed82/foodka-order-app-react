import React from "react";

const MealsItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className="flex justify-between m-4 pb-4 border-b border-solid border-[#ccc]">
            <div className="">
                <h3 className="text-lg font-bold">{props.name}</h3>
                <p className="italic">{props.description}</p>
                <p className="mt-1 font-bold text-price text-xl">{price}</p>
            </div>
            <div className=""></div>
        </li>
    );
};

export default MealsItem;
