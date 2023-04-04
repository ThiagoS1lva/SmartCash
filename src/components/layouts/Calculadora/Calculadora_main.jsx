import styles from './Calculadora_main.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculadora_main() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className={styles.ganhos_calculadora}>Ganhos</h1>
                    <Row>
                        <Col>
                            <h2>Entrada de dados</h2>
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
                    </Col>
                </Row>
                </Col>
            </Row>

        </Container>
    );
}
export default Calculadora_main;