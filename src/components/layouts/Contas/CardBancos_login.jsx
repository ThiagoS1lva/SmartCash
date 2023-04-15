import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CardBancos_login.module.css'
import loading from '../../../assets/img/loading1.gif'

function CardBancos_login(props) {
    const handleVoltar = () => {
        props.onVoltar();
    }
    const cor = props.selectedOption.color;
    const nome = props.selectedOption.name;

    //Função do loading
    const [loadingEqualizer, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 750);
    }, []);


    return (
        <>
            {loadingEqualizer ? (
                <img src={loading} className={styles.loading} />
            ) : (
                cor &&
                <>
                    <h1 className={styles.login}>Cadastre as informações do banco!</h1>
                    <div style={{ backgroundColor: `${cor}` }} className={styles.container_login}>
                        <h1>{nome}</h1>
                        <div className={styles.inputBox}>
                            <input type="number" required="required" />
                            <span>Agência</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="number" required="required" />
                            <span>Conta</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="email" required="required" />
                            <span>Email</span>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="tel" required="required" />
                            <span>Telefone</span>
                        </div>
                        <div className={styles.btn_container}>
                            <button className={styles.btn} onClick={handleVoltar}>VOLTAR</button>
                            <Link to="/" className={styles.link}><button className={styles.btnB}>CADASTRAR</button></Link>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default CardBancos_login;