import styles from './Calculadora_main.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormFinanças from './FormFinanças';
import FormDespesas from './FormDespesas';
import FinancesCard from './FinancesCard';
import DespesasCard from './DespesasCard';
import { useState, useEffect } from 'react';

function Calculadora_main() {

    const [financesProjects, setFinancesProjects] = useState([]);
    const [despesasProjects, setDespesasProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/finances', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setFinancesProjects(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/despesas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setDespesasProjects(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <Container fluid style={{ marginBottom: "5%" }}>
                <Row>
                    <h1 className={styles.ganhos_calculadora}>Ganhos</h1>
                    <Row>
                        <Col>
                            <FormFinanças btnText="Adicionar renda" />
                        </Col>
                        <Col style={{ boxShadow: "0 0 5px rgba(0,0,0,0.3", borderRadius: "5px" }}>
                            <div className={styles.titleFinance}>
                                <h2>Nome</h2>
                                <h2>Valor</h2>
                                <h2>Categoria</h2>
                            </div>
                            {financesProjects.length > 0 &&
                                financesProjects.map((financesProject) => (
                                    <FinancesCard
                                        id={financesProject.id}
                                        name={financesProject.name}
                                        budget={financesProject.budget}
                                        key={financesProject.id}
                                        category={financesProject.category_id}
                                    />
                                ))}
                        </Col>
                    </Row>
                </Row>

            </Container>
            <Container fluid style={{ marginBottom: "5%" }}>
                <Row style={{width:"99.9%"}}>
                    <Col>
                        <h1 className={styles.despesas_calculadora}>Despesas</h1>
                        <Row>
                            <Col>
                                <FormDespesas btnText="Adicionar despesa" />
                            </Col>
                            <Col style={{ boxShadow: "0 0 5px rgba(0,0,0,0.3", borderRadius: "5px" }}>
                                <div className={styles.titleFinance}>
                                    <h2>Nome</h2>
                                    <h2>Valor</h2>
                                    <h2>Categoria</h2>
                                </div>
                                {despesasProjects.length > 0 &&
                                    despesasProjects.map((despesasProjects) => (
                                        <DespesasCard
                                            id={despesasProjects.id}
                                            name={despesasProjects.name}
                                            budget={despesasProjects.budget}
                                            key={despesasProjects.id}
                                            category={despesasProjects.category_id}
                                        />
                                    ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>

    );
}
export default Calculadora_main;