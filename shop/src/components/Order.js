import React, { Component } from "react";
import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export class Order extends Component {
    render() {
        return (
            <div className="item">
                <img src={`./img/${this.props.item.img}`} />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <div className="buttons">
                    <FaMinusCircle
                        className="plus-minus"
                        onClick={() => this.props.decrement(this.props.item)}
                    />
                    <span>{this.props.item.count}</span>
                    <FaPlusCircle
                        className="plus-minus"
                        onClick={() => this.props.increment(this.props.item)}
                    />
                </div>

                <FaTrash
                    className="delete-icon"
                    onClick={() => this.props.onDelete(this.props.item.id)}
                />
            </div>
        );
    }
}

export default Order;
