import loading from '../../assets/img/loading.gif';
import React, { useState, useEffect } from 'react';
import Footer from '../layouts/Footer'
import styles from './Contas.module.css'
import CardBancos from '../layouts/Contas/CardBancos';

function Contas() {

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
                    <div className={styles.containerTexto}>
                        <h1>Sincronize os dados de outros apps de finanças!</h1>
                        <h2>É só clicar em qual você quer!</h2>
                    </div>
                    <CardBancos />
                    <h1 style={{textAlign:'center', fontWeight : 'bold', marginBottom : '5%'}}>Mais bancos em breve!</h1>
                    <Footer />
                </>
            )
            }

        </>
    )
}

export default Contas