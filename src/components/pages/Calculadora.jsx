import styles from './Calculadora.module.css'
import React, { useState, useEffect } from 'react';
import loading from '../../assets/img/loading.gif';
import Calculadora_main from '../layouts/Calculadora/Calculadora_main';




function Calculadora() {

    const [loadingEqualizer, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
        {loadingEqualizer ? (
            <img src={loading} className={styles.loading} />) : (
            <>
                <h1 className={styles.title_calculator}>Calculadora</h1>
                <Calculadora_main/>
            </>
            )
            
        
        
        }
        </>
    );
}

export default Calculadora