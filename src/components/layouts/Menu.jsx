import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
import icon from '../../assets/img/menu-de-hamburguer.png'
import money from '../../assets/img/money.png'
import { useState } from 'react';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className={styles.menuContainer}>
                <nav className={styles.back}>
                    <Link to="/">Home</Link>
                    <Link to="/finanças">Finanças</Link>
                    <Link to="/contas">Gerenciamento de contas</Link>
                    <Link to="/cliente">Suporte ao cliente</Link>
                </nav>
                <div className={styles.iconContainer}>
                    <img src={money} alt="Menu" width='40px' />
                    <img src={icon} className={styles.iconContainerHamburguer}  alt="Menu" width='40px' onClick={toggleMenu} />
                </div>
            </div>
            {showMenu && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownMenu}>
                        <Link to="/" className={styles.link} onClick={toggleMenu}>Home</Link>
                        <Link to="/finanças" className={styles.link} onClick={toggleMenu}>Finanças</Link>
                        <Link to="/contas" className={styles.link} onClick={toggleMenu}>Gerenciamento de contas</Link>
                        <Link to="/cliente" className={styles.link} onClick={toggleMenu}>Suporte ao cliente</Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Menu;
