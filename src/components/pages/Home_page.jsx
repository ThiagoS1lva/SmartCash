import Home_image from '../layouts/Home/Home_image'
import Home_Carousels from '../layouts/Home/Home_Carousels'
import Home_sobre from '../layouts/Home/Home_sobre'
import Home_feedback from '../layouts/Home/Home_feedback'

import React, { useState, useEffect } from 'react';
import loading from '../../assets/img/loading.gif'
import Footer from '../layouts/Footer'
import styles from './Home_page.module.css'

function Home_page() {
    const [loadingEqualizer, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loadingEqualizer ? (
                <img src={loading} className={styles.loading} />
                ) : (
                <>
                    <Home_image />
                    <Home_Carousels />
                    <Home_sobre />
                    <Home_feedback />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Home_page 