import styles from './DespesasCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';


function DespesasCard({ id, name, budget, category, handleRemove }) {


    const handleDelete = () => {
        fetch(`http://localhost:5000/despesas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then(() => {
                // Remova o item financeiro da lista
                handleRemove(id);
            })
            .catch((err) => console.log(err));
    };



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
                    <BsFillTrashFill onClick={handleDelete} />
                </button>
            </div>
        </div>
    );
}
export default DespesasCard