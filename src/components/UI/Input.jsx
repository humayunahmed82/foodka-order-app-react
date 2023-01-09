import React, { Fragment } from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <Fragment>
            <label className="font-bold mr-2" htmlFor={props.input.id}>
                {props.label}
            </label>
            <input
                ref={ref}
                className="w-12 rounded border border-solid font-medium border-[#ccc] px-2 focus:outline-none"
                {...props.input}
            />
        </Fragment>
    );
});

export default Input;
