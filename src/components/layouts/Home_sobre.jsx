import styles from './Home_sobre.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home_sobre() {
    return (
        <Container className={styles.container}>
            <Row>
                <h1><b>Sobre a SmartCash</b></h1>
                <p>A <b>SmartCash</b> é uma empresa recém-criada em 2023, que tem como missão ajudar as pessoas a serem mais organizadas na questão financeira. Fundada por um jovem empreendedor com vasta experiência na área financeira, a SmartCash nasceu com o propósito de <b>democratizar o acesso à informação e às ferramentas necessárias para uma vida financeira saudável e equilibrada.</b></p>
            </Row>
            <Row>
                <p>Com uma equipe altamente qualificada e comprometida em oferecer soluções inovadoras, a SmartCash tem como objetivo simplificar a vida financeira das pessoas, oferecendo serviços e produtos acessíveis e eficientes. Acreditamos que a organização financeira é um passo importante para uma vida mais tranquila e realizada, e estamos comprometidos em ajudar nossos clientes a alcançarem seus objetivos financeiros.</p>
            </Row>
            <Row>
                <p>Estamos constantemente buscando novas maneiras de melhorar e aprimorar nossos serviços, e estamos muito animados para fazer parte da jornada de nossos clientes rumo à estabilidade financeira. Seja bem-vindo à SmartCash, onde o futuro financeiro começa agora.</p>
            </Row>
        </Container>
    )
}
export default Home_sobre