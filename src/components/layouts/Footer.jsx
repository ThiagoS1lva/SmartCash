import styles from './Footer.module.css'
import Facebook from '../../assets/img/icons/face_ico.png'
import Linkedin from '../../assets/img/icons/linkedin.png'
import Github from '../../assets/img/icons/github.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footercol}>
                        <h4>SmartMoney</h4>
                    </div>
                    <div className={styles.footercol}>
                        <h4>Ajuda</h4>
                        <ul>
                            <li><Link to="/cliente">Suporte ao cliente</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>Nossos Produtos</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/calculadora">Calculadora de orçamento</Link></li>
                            <li><Link to="/grafico">Gráficos e relatórios</Link></li>
                            <li><Link to="/conta">Gerenciamento ao cliente</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>Me siga</h4>
                        <div className={styles.sociallinks}>
                            <a href='https://www.facebook.com/'><img src={Facebook} /></a>

                            <a href='https://www.linkedin.com/in/thiago-oliveira-49952823a/'><img src={Linkedin} /></a>

                            <a href='https://github.com/ThiagoS1lva'><img src={Github} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer