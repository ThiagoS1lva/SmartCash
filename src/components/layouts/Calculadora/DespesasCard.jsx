import styles from './DespesasCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';


function DespesasCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.despesaValue}>
            <h4>{name}</h4>
            <h4>R${budget}</h4>
            <h4 className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span>

                {category === "1" ? 'Fixo' : category === "2" ? 'Variável' : '*'}
            </h4>
            <div className={styles.despesaAction}>
                <button>
                    <BsPencil />
                </button>
                <button>
                    <BsFillTrashFill onClick={() => handleRemove(id)} />
                </button>
            </div>
        </div>
    );
}
export default DespesasCard