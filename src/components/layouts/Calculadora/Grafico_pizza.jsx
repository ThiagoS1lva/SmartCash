import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Grafico_Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            totalBudget: 0,
            totalExpenses: 0
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/finances")
            .then((response) => response.json())
            .then((data) => {
                const totalBudget = data.reduce((acc, cur) => acc + cur.budget, 0);
                this.setState({ totalBudget });
            });

        fetch("http://localhost:5000/despesas")
            .then((response) => response.json())
            .then((data) => {
                const totalExpenses = data.reduce((acc, cur) => acc + cur.budget, 0);
                this.setState({ totalExpenses });
            });
    }

    render() {
        const { totalBudget, totalExpenses } = this.state;

        let resto = 0;

        if (totalBudget > totalExpenses) {
            resto = totalBudget - totalExpenses;
        }

        const options = {
            title: "Saldo / Despesas",
            is3D: true,
            fontSize: '20'
        }

        const data = [
            ["Saldo disponivel", "Despesas"],
            ["Saldo disponivel", resto],
            ["Despesas", totalExpenses],
        ]

        return (
            <div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width="100%"
                    height="400px"
                />
            </div>
        );
    }
}

export default Grafico_Pizza;
