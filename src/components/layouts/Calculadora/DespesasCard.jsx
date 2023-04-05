import styles from './DespesasCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { useState } from 'react';

function DespesasCard({ id, name, budget, category, handleRemove }) {

    const [isEditing, setIsEditing] = useState(true);
    const [updateName, setUpdateName] = useState(name);
    const [updateBudget, setUpdateBudget] = useState(budget);
    const [updateCategory, setUpdateCategory] = useState(category);


    //Função para remover
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


    //Função para editar
    const handleEdit = () => {
        setIsEditing(false);
    };

    const handleUpdate = (e) => {
        const financeToUpdate = {
            name: updateName,
            budget: updateBudget,
            category_id: updateCategory
        };

        fetch(`http://localhost:5000/despesas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(financeToUpdate),
        })
            .then((res) => res.json())
            .then(() => {
                setIsEditing(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={styles.despesaValue}>
            {isEditing ? (
                <>
                    <h4>{name}</h4>
                    <h4>R${budget}</h4>
                    <h4 className={styles.category_text}>
                        <span className={`${styles[category]}`}></span>

                        {category === "1" ? 'Fixo' : category === "2" ? 'Variável' : '*'}
                    </h4>
                    <div className={styles.despesaAction}>
                        <button onClick={handleEdit}>
                            <BsPencil />
                        </button>
                        <button onClick={handleDelete}>
                            <BsFillTrashFill />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <form className={styles.form_card} onSubmit={handleUpdate}>
                        <input
                            type="text"
                            maxLength={10}
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                        />
                        <input
                            type="number"
                            maxLength={10}
                            value={updateBudget}
                            onChange={(e) => setUpdateBudget(e.target.value)}
                        />
                        <select
                            value={updateCategory}
                            onChange={(e) => setUpdateCategory(e.target.value)}
                        >
                            <option value="1">Fixo</option>
                            <option value="2">Variável</option>
                            <option value="3">* </option>
                        </select>
                        <button type="submit">Atualizar</button>
                    </form>
                </>
            )}
        </div>
    );
}
export default DespesasCard