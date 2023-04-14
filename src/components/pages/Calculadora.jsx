import styles from './Calculadora.module.css'
import React, { useState, useEffect } from 'react';
import loading from '../../assets/img/loading.gif';
import Calculadora_main from '../layouts/Calculadora/Calculadora_main';
import Footer from '../layouts/Footer'
import { useNavigate } from 'react-router-dom';
import Grafico_main from '../layouts/Calculadora/Grafico_main';



function Calculadora() {

    const navigate = useNavigate();

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
                    <h1 className={styles.title_calculator}>Finanças</h1>
                    <Calculadora_main />
                    <h1 className={styles.title_grafico}>Gráficos</h1>
                    <Grafico_main/>
                    <Footer />
                    
                </>
            )



            }
        </>
    );
}

export default Calculadora