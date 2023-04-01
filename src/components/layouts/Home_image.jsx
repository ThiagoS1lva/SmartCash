import styles from './Home_image.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from '../../assets/img/Personal finance.gif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home_image() {

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className={styles.text}>Transforme sua vida financeira de maneira fácil e inteligente com nosso site de finanças. Organize suas finanças pessoais e conquiste a tão sonhada estabilidade financasdeira.</h2>
                </Col>
                <Col>
                    <img src={imagem} />
                </Col>
            </Row>
        </Container>

    )
}

export default Home_image
