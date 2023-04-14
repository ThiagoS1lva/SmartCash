import React, { Component } from "react";
import { Chart } from "react-google-charts";
import styles from './Grafico_pizza.module.css'

class Grafico_Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            totalBudget: 0,
            totalExpenses: 0,
            valorMaisAlto: 0,
            despesaMaisAlta: 0,
            nomeMaisAlto: 0,
            nomeDAlto: 0
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/finances")
            .then((response) => response.json())
            .then((data) => {
                //Valor total
                const totalBudget = data.reduce((acc, cur) => acc + cur.budget, 0);
                this.setState({ totalBudget });
                //Valor mais alto
                const valorMaisAlto = data.reduce((max, item) => {
                    return item.budget > max ? item.budget : max;
                }, 0)
                this.setState({ valorMaisAlto });
                //nome da renda mais alta
                const nomeMaisAlto = data.reduce((max, item) => {
                    return item.budget > max.budget ? item : max;
                }, data[0])
                this.setState({ nomeMaisAlto: nomeMaisAlto.name });
            });

        fetch("http://localhost:5000/despesas")
            .then((response) => response.json())
            .then((data) => {
                //Despesa total
                const totalExpenses = data.reduce((acc, cur) => acc + cur.budget, 0);
                this.setState({ totalExpenses });
                //Despesa mais alta
                const despesaMaisAlta = data.reduce((max, item) => {
                    return item.budget > max ? item.budget : max;
                }, 0)
                this.setState({ despesaMaisAlta });
                //nome despesa mais alta
                const nomeDAlto = data.reduce((max, item) => {
                    return item.budget > max.budget ? item : max;
                }, data[0])
                this.setState({ nomeDAlto: nomeDAlto.name });
            });
    }

    render() {
        const { totalBudget, totalExpenses, valorMaisAlto, despesaMaisAlta, nomeMaisAlto, nomeDAlto } = this.state;
        
        //Saldo
        let resto = 0;
        if (totalBudget > totalExpenses) {
            resto = totalBudget - totalExpenses;
        }

        //Gráfico
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
                <div style={{ justifyContent: 'center', display: 'flex' }}>

                    <h5 className={styles.grafico_texto}> <b style={{ color: "red" }}>Atenção:</b> Este gráfico mostra apenas a relação entre sua finança e suas despesas. Caso suas despesas sejam maiores do que sua finança, ele mostrará suas despesas como 100%, uma vez que não haverá saldo disponível para ser exibido no gráfico.</h5>
                </div>
                <div className={styles.grafico_analise}>
                    <h4> &#x2022;Sua renda mais alta é <b>{nomeMaisAlto}</b> no valor de <b style={{ color: 'green' }}>R${valorMaisAlto}</b></h4>

                    <h4> &#x2022;Sua despesa mais alta é <b>{nomeDAlto}</b> no valor de <b style={{ color: 'red' }}>R${despesaMaisAlta}</b></h4>
                </div>
            </div>
        );
    }
}

export default Grafico_Pizza;
