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


function CardBancos() {
    return (
        <div className={styles.Container}>

            {/*PARTE 1*/}
            <div className={styles.Row}>
                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={next} />
                        <h3>Next</h3>
                    </div>
                </div>

                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={pagseguro} />
                        <h3>PagSeguro</h3>
                    </div>
                </div>

                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={picpay} />
                        <h3>PicPay</h3>
                    </div>
                </div>
            </div>

            {/*PARTE 2*/}
            <div className={styles.Row}>
                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={caixa} />
                        <h3>Caixa Econômica</h3>
                    </div>
                </div>

                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={itau} />
                        <h3>Itaú</h3>
                    </div>
                </div>

                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={inter} />
                        <h3>Inter</h3>
                    </div>
                </div>
            </div>

            {/*PARTE 3*/}
            <div className={styles.Row}>
                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={nubank} />
                        <h3>NuBank</h3>
                    </div>
                </div>

                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={bradesco} />
                        <h3>Bradesco</h3>
                    </div>
                </div>

                <div className={styles.Col}>
                    <div className={styles.card}>
                        <img src={santander} />
                        <h3>Santander</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardBancos