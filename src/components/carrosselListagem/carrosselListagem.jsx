import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carrosselListagem.css'; // Importe o arquivo de estilos CSS

const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '150px'
};

const Carousel = () => {
    return (
        <div className="carouselContainer">
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="https://d1kq2dqeox7x40.cloudfront.net/images/tattoo_style_examples/69001375-636d-4dca-82ee-2b420e280270.webp" alt="Image 1" className="carousel-image" />
                    <p className="carousel-text">Linha Fina</p>                
                </div>
                <div className="carousel-item">
                    <img src="https://d1kq2dqeox7x40.cloudfront.net/images/tattoo_style_examples/6bfbd840be473a7d033c5.jpeg" alt="Image 2" className="carousel-image" />
                    <p className="carousel-text">Preto & Cinza</p>
                </div>
                <div className="carousel-item">
                    <img src="https://d1kq2dqeox7x40.cloudfront.net/images/tattoo_style_examples/55c973410417fda5d6f3e.jpeg" alt="Image 3" className="carousel-image" />
                    <p className="carousel-text">Floral</p>
                </div>
                <div className="carousel-item">
                    <img src="https://d1kq2dqeox7x40.cloudfront.net/images/tattoo_style_examples/0417fda5d6f3e9cd4b41b.jpeg" alt="Image 3" className="carousel-image" />
                    <p className="carousel-text">Micro Realismo</p>
                </div>
                <div className="carousel-item">
                    <img src="https://d1kq2dqeox7x40.cloudfront.net/images/tattoo_style_examples/53654d7555316ae3b742a.jpeg" alt="Image 3" className="carousel-image" />
                    <p className="carousel-text">Aquarela</p>
                </div>
                {/* Add more images here */}
            </Slider>
        </div>
    );
};

export default Carousel;