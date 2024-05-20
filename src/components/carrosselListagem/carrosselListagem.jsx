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
                    <img src="https://img.freepik.com/psd-gratuitas/close-de-um-simples-por-tras-da-tatuagem-de-orelha-de-uma-jovem-mulher_53876-11973.jpg?t=st=1716247116~exp=1716250716~hmac=0433eb964040505d9d0ede80cf105749afdfca96d0f839c8bfd2ebe4e7855bb1&" alt="Image 1" className="carousel-image" />
                    <p className="carousel-text">Minimalismo</p>                
                </div>
                <div className="carousel-item">
                    <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/6352a968-3559-4774-9f07-0a6eb025e079/DallEGeneratedImages/dalle-70ad5950-406a-4d2f-985a-ff37b7f3973d0251686053209285110900.jpg&dcHint=BrazilSouth&fileToken=80b289fb-e83d-4e65-8771-9e26c6c8eda3" alt="Image 2" className="carousel-image" />
                    <p className="carousel-text">Blackwork</p>
                </div>
                <div className="carousel-item">
                    <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/6352a968-3559-4774-9f07-0a6eb025e079/DallEGeneratedImages/dalle-34918068-4f56-4788-bbe6-69ff0f2a47060251686053022023884800.jpg&dcHint=BrazilSouth&fileToken=80b289fb-e83d-4e65-8771-9e26c6c8eda3" alt="Image 3" className="carousel-image" />
                    <p className="carousel-text">Pontilhismo</p>
                </div>
                <div className="carousel-item">
                    <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/6352a968-3559-4774-9f07-0a6eb025e079/DallEGeneratedImages/dalle-e98cd2ed-f29e-459a-abd8-db0481c770310251686052835410217600.jpg&dcHint=BrazilSouth&fileToken=80b289fb-e83d-4e65-8771-9e26c6c8eda3" alt="Image 4" className="carousel-image" />
                    <p className="carousel-text">Realismo</p>
                </div>
                <div className="carousel-item">
                    <img src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/6352a968-3559-4774-9f07-0a6eb025e079/DallEGeneratedImages/dalle-d2ed4391-7415-499f-8500-030d904cfb780251686052680615239300.jpg&dcHint=BrazilSouth&fileToken=80b289fb-e83d-4e65-8771-9e26c6c8eda3" alt="Image 5" className="carousel-image" />
                    <p className="carousel-text">Aquarela</p>
                </div>
                {/* Add more images here */}
            </Slider>
        </div>
    );
};

export default Carousel;