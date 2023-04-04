import styles from './Calculadora_main.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormFinanças from './FormFinanças';
import FormDespesas from './FormDespesas';

function Calculadora_main() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className={styles.ganhos_calculadora}>Ganhos</h1>
                    <Row>
                        <Col>
                            <FormFinanças btnText="Adicionar renda"/>
                        </Col>
                        <Col>
                            <h2>Saida dos dados</h2>
                        </Col>
                    </Row>
                </Col>




                <Col>
                <h1 className={styles.despesas_calculadora}>Despesas</h1>
                <Row>
                    <Col>
                    <FormDespesas btnText="Adicionar despesa"/>
                    </Col>
                    <Col>
                    <h2>Saida de dados</h2>
                    </Col>
                </Row>
                </Col>
            </Row>

        </Container>
    );
}
export default Calculadora_main;