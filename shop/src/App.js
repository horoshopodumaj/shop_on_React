import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Items items={this.state.items} />
                <Footer />
            </div>
        );
    }
}

export default App;
