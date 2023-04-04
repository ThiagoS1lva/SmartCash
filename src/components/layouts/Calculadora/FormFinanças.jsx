import { useState, useEffect } from 'react';
import styles from './FormFinanças.module.css';
import Input from '../../form/Input_1';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';

function FormFinanças({ btnText }) {

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


    return (
        <form className={styles.form}>
            <Input type="text" text="Nome da renda" name="name" placeholder="Insira o nome do renda" />
            <Input type="text" text="Valor da renda" name="budget" placeholder="Insira o valor do renda" />
            <Input type="date" text="Data" name="data" />
            <Select name="category_id" text="Selecione a categoria" options={categories} />
            <SubmitButton text={btnText} />
        </form>
    );
}
export default FormFinanças;