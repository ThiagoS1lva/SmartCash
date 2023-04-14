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
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <h5 className={styles.grafico_texto}> <b style={{
                    color
                        : "red"
                }}>Atenção:</b> Este gráfico mostra apenas a relação entre sua finança e suas despesas. Caso suas despesas sejam maiores do que sua finança, ele mostrará suas despesas como 100%, uma vez que não haverá saldo disponível para ser exibido no gráfico.</h5>
            </div>
        </>
    )
}

export default Grafico_main