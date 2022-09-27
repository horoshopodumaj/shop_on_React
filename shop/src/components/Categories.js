import React, { Component } from "react";

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Все товары",
                },
                {
                    key: "chairs",
                    name: "Стулья",
                },
                {
                    key: "tables",
                    name: "Столы",
                },
                {
                    key: "sofas",
                    name: "Диваны",
                },
                {
                    key: "lamps",
                    name: "Лампы",
                },
            ],
        };
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map((elem) => (
                    <div
                        key={elem.key}
                        onClick={() => this.props.chooseCategory(elem.key)}
                    >
                        {elem.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Categories;
