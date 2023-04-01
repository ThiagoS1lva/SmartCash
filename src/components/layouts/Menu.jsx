import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
import icon from '../../assets/img/menu-de-hamburguer.png'

function Menu() {


    return (
        <>
            <div className={styles.menuContainer}>
                <nav className={styles.back}>
                    <Link to="/">Home</Link>
                    <Link to="/calculadora">Calculadora de orçamento</Link>
                    <Link to="/grafico">Gráficos e relatórios</Link>
                    <Link to="/contas">Gerenciamento de contas</Link>
                    <Link to="/cliente">Suporte ao cliente</Link>
                </nav>
                <div className={styles.iconContainer}>
                    <img src={icon} alt="Menu" width='40px' />
                </div>
            </div>
        </>
    )
}


export default Menu
