import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach((elem) => {
        sum += Number.parseFloat(elem.price);
    });

    return (
        <>
            {props.orders.map((item) => (
                <Order onDelete={props.onDelete} key={item.id} item={item} />
            ))}
            <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)}$</p>
        </>
    );
};

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Корзина пуста</h2>
        </div>
    );
};

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart
                    onClick={() => setCartOpen((cartOpen = !cartOpen))}
                    className={`shop-cart-button ${cartOpen && "active"}`}
                />

                {cartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0
                            ? showOrders(props)
                            : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
