import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className="max-h-96 overflow-auto">
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="flex items-center justify-between font-bold text-2xl my-4">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="text-right space-x-4">
                <button
                    onClick={props.onClose}
                    className="border border-solid border-primary text-primary font-bold py-2 px-8 rounded-3xl hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                    Close
                </button>
                {hasItem && (
                    <button className="border border-solid border-primary py-2 px-8 rounded-3xl bg-primary text-white transition-all font-bold hover:bg-[#641e03]">
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
