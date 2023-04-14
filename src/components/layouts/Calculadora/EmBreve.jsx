import Em_Breve from '../../../assets/img/Em_Breve.gif'
import styles from './EmBreve.module.css'

function EmBreve () {

    return (
        <div className={styles.em_breve}>
            <img src={Em_Breve} />
            <h1 className={styles.rise}>Em breve teremos mais novidades!</h1>
        </div>
    )
}

export default EmBreve