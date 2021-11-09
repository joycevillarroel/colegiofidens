import React from 'react';
import './Carrousel.css';

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return(
        <div className="home">
            <div className="product-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="image"
                        src="https://www.matriculanglo.com.br/assets/img/pecas/Esc_CampanhaInstitucionalAnglo_BannerSite_01_Mobile_m.jpg"
                        alt="Matrículas abertas" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="image"
                        src="https://www.matriculanglo.com.br/assets/img/pecas/Esc_CampanhaInstitucionalAnglo_BannerSite_03_Mobile_m.jpg"
                        alt="Faça sua rematrícula"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="image"
                        src="https://www.matriculanglo.com.br/assets/img/pecas/Esc_CampanhaInstitucionalAnglo_BannerSite_04_Mobile_m.jpg"
                        alt="Produtos La Pastina"
                        />
                    </Carousel.Item>
                    </Carousel>
                </div>
    </div>
    )
}

export default Home;