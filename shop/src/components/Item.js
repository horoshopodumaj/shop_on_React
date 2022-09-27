import React, { Component } from "react";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={""} />
                <h2>{this.props.item.title}</h2>
                <h2>{this.props.item.desc}</h2>
                <h2>{this.props.item.price}</h2>
                <div className="add-to-cart">+</div>
            </div>
        );
    }
}

export default Item;
