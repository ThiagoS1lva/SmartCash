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
                    <CardBancos />
                    <Footer />
                </>
            )
            }

        </>
    )
}

export default Contas