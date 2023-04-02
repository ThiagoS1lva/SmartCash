import styles from './Home_Carousels.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from '../../assets/img/1.png'
import imagem2 from '../../assets/img/2.png'
import imagem3 from '../../assets/img/3.png'

function Home_Carousels() {
    return (
        <div style={{backgroundColor:'rgba(184, 184, 184, 1)'}}>
            <div className={styles.children}>
                <Carousel className="mx-auto">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagem1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagem2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagem3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}
export default Home_Carousels
