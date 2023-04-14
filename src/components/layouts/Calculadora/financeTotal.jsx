import React, { Component } from "react";
import styles from './financeTotal.module.css'

class FInanceTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBudget: 0
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/finances")
            .then((response) => response.json())
            .then((data) => {
                //Valor total
                const totalBudget = data.reduce((acc, cur) => acc + cur.budget, 0);
                this.setState({ totalBudget });
            });
    }

    render() {
        const { totalBudget } = this.state;
        return (
            <div className={styles.container}>
                <h2>Total :R${totalBudget}</h2>
            </div>
        );
    }
}

export default FInanceTotal;
