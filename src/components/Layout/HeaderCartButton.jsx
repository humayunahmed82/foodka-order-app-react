import React from "react";
import { BsCart3 } from "react-icons/bs";

const HeaderCartButton = (props) => {
    return (
        <button className="bg-secondary text-white px-8 py-3 rounded-full space-x-2 flex justify-around font-medium items-center hover:bg-hover group">
            <span>
                <BsCart3 />
            </span>
            <span>You Cart</span>
            <span className="bg-badge px-3 py-1 rounded-full group-hover:bg-badge_hover">
                3
            </span>
        </button>
    );
};

export default HeaderCartButton;
