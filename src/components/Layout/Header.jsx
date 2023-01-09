import React, { Fragment } from "react";
import logo from "../../assets/logo.svg";
import headerBg from "../../assets/header-bg.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-primary px-[10%] z-10 shadow-md text-white">
                <div className="w-52">
                    <img src={logo} alt="" />
                </div>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            <div className="w-full h-96 overflow-hidden">
                <img
                    className="w-[105%] max-w-none h-full object-cover -rotate-[5deg] -translate-x-12 -translate-y-[6.3rem]"
                    src={headerBg}
                    alt=""
                />
            </div>
        </Fragment>
    );
};

export default Header;
