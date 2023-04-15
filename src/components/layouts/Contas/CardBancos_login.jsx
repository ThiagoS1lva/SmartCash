import React from 'react';
import styles from './CardBancos_login.module.css'

function CardBancos_login(props) {
    const handleVoltar = () => {
        props.onVoltar();
    }
    const cor = props.selectedOption.color;
    const nome = props.selectedOption.name;

    return (
        <>
            {cor &&
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
                        <button className={styles.btn} onClick={handleVoltar}>Cadastrar!</button>
                    </div>
                </>
            }


        </>
    )
}

export default CardBancos_login;