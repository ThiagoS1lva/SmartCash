import Graficos_f from './Graficos_f'
import Grafico_d from './Graficos_d'
import Grafico_Pizza from './Grafico_pizza'
import styles from './Grafico_main.module.css'

function Grafico_main() {
    return (
        < >
            <h2 className={styles.grafico_subtitle}>Gráficos de Barra</h2>

            <Graficos_f />

            <Grafico_d />
            <h2 className={styles.grafico_subtitle}>Grafico de Pizza</h2>
            <Grafico_Pizza />
        </>
    )
}

export default Grafico_main