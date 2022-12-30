import React, { Fragment } from "react";
import headerBg from "../../assets/header-bg.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-primary px-[10%] z-10 shadow-md text-white">
                <h1 className="text-2xl font-bold">FoodKa App</h1>
                <HeaderCartButton />
            </header>

            <div className="w-full h-96 overflow-hidden">
                <img
                    className="w-[120%] h-full object-cover -rotate-[5deg] -translate-x-4 -translate-y-16"
                    src={headerBg}
                    alt=""
                />
            </div>
        </Fragment>
    );
};

export default Header;
