import styles from './Home_feedback.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import pessoa1 from '../../assets/img/pessoa1.jpg'
import pessoa2 from '../../assets/img/pessoa2.jpg'
import pessoa3 from '../../assets/img/pessoa3.jpg'

function Home_feedback() {
    return (
        <Container className={styles.container_feedback}>
            <h1 style={{ fontWeight: 'bold', marginBottom: '2%' }}>Feedbacks</h1>
            <Row>
                <Col className={styles.col_feedback}>
                    <Card>
                        <Card.Img variant="top" src={pessoa1} />
                        <Card.Body>
                            <Card.Title className={styles.cardTitle_feedback}>Gabriel Silva</Card.Title>
                            <Card.Text className={styles.cardText_feedback}>
                                "Finalmente encontrei um site de finanças que atende às minhas necessidades! Com a ajuda das ferramentas e recursos disponíveis, agora sou capaz de manter minhas finanças em dia."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.col_feedback}>
                    <Card style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={pessoa2} />
                        <Card.Body>
                            <Card.Title className={styles.cardTitle_feedback}>Maria Souza</Card.Title>
                            <Card.Text className={styles.cardText_feedback}>
                                "O design intuitivo e a interface amigável tornam a navegação pelo site muito fácil. O melhor de tudo é que agora posso ver meus gastos de forma clara e detalhada."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.col_feedback}>
                    <Card style={{ width: '23rem' }}>
                        <Card.Img variant="top" src={pessoa3} />
                        <Card.Body>
                            <Card.Title className={styles.cardTitle_feedback}>Ana Santos</Card.Title>
                            <Card.Text className={styles.cardText_feedback}>
                                "O site de finanças é incrível! Agora tenho acesso a gráficos detalhados e relatórios em tempo real que me ajudam a manter meus gastos sob controle. Altamente recomendado!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home_feedback