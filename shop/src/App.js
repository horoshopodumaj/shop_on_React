import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: "Стул серый",
                    img: "chair_grey.jpg",
                    desc: "Lorem ipsum dolor sit amet.",
                    category: "chairs",
                    price: "49.99",
                },
                {
                    id: 2,
                    title: "Стол",
                    img: "table.jpg",
                    desc: "Lorem ipsum dolor sit amet.",
                    category: "tables",
                    price: "149.99",
                },
                {
                    id: 3,
                    title: "Диван",
                    img: "sofa.jpg",
                    desc: "Lorem ipsum dolor sit amet.",
                    category: "sofas",
                    price: "149.99",
                },
                {
                    id: 4,
                    title: "Лампа",
                    img: "lamp.jpg",
                    desc: "Lorem ipsum dolor sit amet.",
                    category: "lamps",
                    price: "14.99",
                },
                {
                    id: 5,
                    title: "Стул белый",
                    img: "chair_white.jpg",
                    desc: "Lorem ipsum dolor sit amet.",
                    category: "chairs",
                    price: "49.99",
                },
            ],
        };

        this.addToOrder = this.addToOrder.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} />
                <Items items={this.state.items} onAdd={this.addToOrder} />
                <Footer />
            </div>
        );
    }

    addToOrder(item) {
        this.setState({ orders: [...this.state.orders, item] });
    }
}

export default App;
