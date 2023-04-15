import { Chart } from "react-google-charts";
import React, { Component } from "react";

class Graficos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [["Data", "Budget"]],
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/finances")
            .then((response) => response.json())
            .then((data) => {
                const chartData = [["Data", "Renda"]];
                data.forEach((item) => {
                    chartData.push([`${item.name} - ${item.data}`, item.budget]);
                });

                chartData.sort((a, b) => new Date(a[0]) - new Date(b[0]));
                
                this.setState({ chartData });
            });
    }

    render() {
        return (
            <Chart
                chartType="ColumnChart"
                data={this.state.chartData}
                options={{
                    title: "Renda",
                    colors : ["#2A5BAD"],
                    fontSize: 18,
                    fontWeight: "bold",
                    hAxis: {
                        title: "Nome / Data",
                    },
                    vAxis: {
                        title: "Valor",
                    },
                }}th="100%"
                height="400px"
                legendToggle
            />
        );
    }
}

export default Graficos;
