import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
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
                {
                    id: 6,
                    title: "Лампа",
                    img: "lamp2.jpg",
                    desc: "Lorem ipsum dolor sit amet.",
                    category: "lamps",
                    price: "24.99",
                },
            ],
            showFullItem: false,
            fullItem: {},
        };

        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <Header
                    orders={this.state.orders}
                    onDelete={this.deleteOrder}
                />
                <Categories chooseCategory={this.chooseCategory} />
                <Items
                    items={this.state.currentItems}
                    onAdd={this.addToOrder}
                    onShowItem={this.onShowItem}
                />
                {this.state.showFullItem && (
                    <ShowFullItem
                        onAdd={this.addToOrder}
                        item={this.state.fullItem}
                        onShowItem={this.onShowItem}
                    />
                )}
                <Footer />
            </div>
        );
    }

    onShowItem(item) {
        this.setState({ fullItem: item });
        this.setState({ showFullItem: !this.state.showFullItem });
    }

    chooseCategory(category) {
        if (category === "all") {
            this.setState({ currentItems: this.state.items });
            return;
        }
        this.setState({
            currentItems: this.state.items.filter(
                (el) => el.category === category
            ),
        });
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach((elem) => {
            if (elem.id === item.id) {
                isInArray = true;
            }
        });
        if (!isInArray) {
            this.setState({ orders: [...this.state.orders, item] });
        }
    }

    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter((elem) => elem.id !== id),
        });
    }
}

export default App;
