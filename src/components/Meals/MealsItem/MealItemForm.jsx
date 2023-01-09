import React, { useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="flex items-center mb-2">
                <Input
                    ref={amountInputRef}
                    label="Amount"
                    input={{
                        id: "amount",
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
            </div>
            <div className="">
                <button className="bg-primary py-2 px-8 text-white rounded-3xl flex items-center space-x-2 hover:bg-[#641e03] transition-all">
                    <BsPlusLg /> <span>Add Item</span>
                </button>
            </div>
            {!amountIsValid && (
                <p className="text-xs mt-1 text-red-700 font-medium">
                    Please Enter a valid amount (1-5)
                </p>
            )}
        </form>
    );
};

export default MealItemForm;
