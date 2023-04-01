import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

function Menu() {

    return (
        <>
            <nav className={styles.back}>

                <Link to="/">Home</Link>
                <Link to="/calculadora">Calculadora de orçamento</Link>
                <Link to="/grafico">Gráficos e relatórios</Link>
                <Link to="/contas">Gerenciamento de contas</Link>
                <Link to="/cliente">Suporte ao cliente</Link>
            </nav>
        </>
    )
}

export default Menu
