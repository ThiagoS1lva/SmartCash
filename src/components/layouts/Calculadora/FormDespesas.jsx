import { useState, useEffect } from 'react';
import styles from './FormDespesas.module.css';
import Input from '../../form/Input_1';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';


function FormDespesas({ btnText }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleSubmit = (event) => {

        const formData = new FormData(event.target);
        const name = formData.get('name_d');
        const budget = parseInt(formData.get('budget'));
        const data = formData.get('data');
        const category_id = formData.get('category_id');

        fetch('http://localhost:5000/despesas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                budget,
                data,
                category_id,
            }),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="text" text="Nome da despesa" name="name_d" placeholder="Insira o nome da despesa" />
            <Input type="text" text="Valor da despesa" name="budget" placeholder="Insira o valor da despesa" />
            <Input type="date" text="Data" name="data" />
            <Select name="category_id" text="Selecione a categoria" options={categories} />
            <SubmitButton text={btnText} />
        </form>
    );
}
export default FormDespesas;