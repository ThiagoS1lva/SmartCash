import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CardBancos.module.css'
import bradesco from '../../../assets/img/bancos/bradesco.png'
import caixa from '../../../assets/img/bancos/caixa.png';
import inter from '../../../assets/img/bancos/inter.png';
import itau from '../../../assets/img/bancos/itau.png';
import nubank from '../../../assets/img/bancos/nubank.png';
import next from '../../../assets/img/bancos/next.png';
import pagseguro from '../../../assets/img/bancos/pagseguro.png';
import picpay from '../../../assets/img/bancos/picpay.png';
import santander from '../../../assets/img/bancos/santander.png';
import CardBancos_login from './CardBancos_login';
import React, { useState } from 'react';

function CardBancos() {

    const [selectedOption, setSelectedOption] = useState([]);
    const [botaoClicado, setbotaoClicado] = useState(false);
    //Função para aparecer o componente filho
    const handleClick = (color, name) => {
        setSelectedOption({ color, name });
        setbotaoClicado(true);
    }

    //Função para o filho voltar
    const handleVoltar = () => {
        setbotaoClicado(false);
    }

    return (
        <>
            {botaoClicado ? <CardBancos_login onVoltar={handleVoltar} selectedOption={selectedOption} /> :
                <div className={styles.Container}>
                    <div className={styles.containerTexto}>
                        <h1>Sincronize os dados de outros apps de finanças!</h1>
                        <h3>É só clicar em qual você quer!</h3>
                    </div>



                    {/*PARTE 1*/}
                    <div className={styles.Row}>
                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(19, 254, 99)', 'Next')}>
                                <img src={next} />
                                <h3>Next</h3>
                            </div>
                        </div>

                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(0, 188, 150)', 'PagSeguro')}>
                                <img src={pagseguro} />
                                <h3>PagSeguro</h3>
                            </div>
                        </div>

                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(15, 198, 91)', 'PicPay')}>
                                <img src={picpay} />
                                <h3>PicPay</h3>
                            </div>
                        </div>
                    </div>

                    {/*PARTE 2*/}
                    <div className={styles.Row}>
                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(25, 94, 156)', 'Caixa Econômica')}>
                                <img src={caixa} />
                                <h3>Caixa Econômica</h3>
                            </div>
                        </div>

                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(235, 112, 1)', 'Itaú')}>
                                <img src={itau} />
                                <h3>Itaú</h3>
                            </div>
                        </div>

                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(255, 122, 1)', 'Inter')}>
                                <img src={inter} />
                                <h3>Inter</h3>
                            </div>
                        </div>
                    </div>

                    {/*PARTE 3*/}
                    <div className={styles.Row}>
                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(130, 9, 209)', 'NuBank')}>
                                <img src={nubank} />
                                <h3>NuBank</h3>
                            </div>
                        </div>

                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(216, 17, 92)', 'Bradesco')}>
                                <img src={bradesco} />
                                <h3>Bradesco</h3>
                            </div>
                        </div>

                        <div className={styles.Col}>
                            <div className={styles.card} onClick={() => handleClick('rgb(224, 0, 0)', 'Santander')}>
                                <img src={santander} />
                                <h3>Santander</h3>
                            </div>
                        </div>
                    </div>
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '5%' }}>Mais bancos em breve!</h1>
                </div>
            }

        </>
    )
}

export default CardBancos