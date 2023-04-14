import styles from './Calculadora.module.css'
import React, { useState, useEffect } from 'react';
import loading from '../../assets/img/loading.gif';
import Calculadora_main from '../layouts/Calculadora/Calculadora_main';
import Footer from '../layouts/Footer'
import Grafico_main from '../layouts/Calculadora/Grafico_main';
import EmBreve from '../layouts/Calculadora/EmBreve';


function Calculadora() {


    const [loadingEqualizer, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);


    return (
        <>
            {loadingEqualizer ? (
                <img src={loading} className={styles.loading} />) : (
                <>
                    <div style={{display
                    : 'flex', justifyContent:'center'}}>
                        <h4 className={styles.texto}>Bem-vindo(a) à página de finanças! Aqui, você pode <b>adicionar, editar e remover suas receitas e despesas.</b> Além disso, oferecemos uma seção com <b>gráficos</b>, na qual você pode analisar suas receitas e despesas em ordem crescente, com base na data selecionada. Por fim, temos um <b>gráfico de pizza que apresenta uma análise de quanto você gastou da sua receita.</b></h4>
                    </div>
                    <h1 className={styles.title_calculator}>Finanças</h1>
                    <Calculadora_main />
                    <h1 className={styles.title_grafico}>Gráficos</h1>
                    <Grafico_main />
                    <EmBreve />
                    <Footer />

                </>
            )



            }
        </>
    );
}

export default Calculadora