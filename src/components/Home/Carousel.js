import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'
import banner4 from '../../assets/banner-4.jpg'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="container slider">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={1500}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                        <h3>Մրգային տորթեր</h3>
                        <p>Աղանդեր՝ կազմված կրեմով կամ ջեմով ներծծված մեկ կամ մի քանի շերտերից:</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
            
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                        <h3>Նրբաբլիթներ</h3>
                        <p>Ռուսական խոհանոցին բնորոշ ուտեստներ են՝ պատրաստված շիկացած թավայի մեջ ջրիկ խմորի լցման միջոցով եփման եղանակով։</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
            
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                        <h3>Աղանդեր</h3>
                        <p>Սեղանի վերջնական ուտեստ՝ նախատեսված լավ համային զգացումների համար, ընթրիքի վերջում մատուցվող:</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Forth slide"
                    />
            
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                        <h3>Մաֆիններ</h3>
                        <p>Մաֆին, փոքր, կլոր կամ օվալաձև թխվածք, հիմնականում՝ քաղցր։ Բաղադրության մեջ մտնում են տարբեր միջուկներ, այդ թվում նաև մրգեր։ Նման է կեքսի։</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        );
}