import { useState,useEffect } from 'react';
import styles from './FormDespesas.module.css';
import Input from '../../form/Input_1';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';


function FormDespesas({ btnText}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])


    
    return (
        <form className={styles.form}>
            <Input type="text" text="Nome da despesa" name="name_d" placeholder="Insira o nome da despesa" />
            <Input type="text" text="Valor da despesa" name="expense" placeholder="Insira o valor da despesa" />
            <Input type="date" text="Data" name="data_d" />
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    );
}
export default FormDespesas;