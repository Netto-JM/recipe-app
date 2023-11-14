import React, { useContext } from 'react';
import Slider from 'react-slick';
import MainContext from '../context/MainContext';
import '../style/Carousel.css';

const SLIDES_TO_SHOW = 3;
const SLIDES_TO_SCROLL = 3;

export default function Carousel() {
  const { carouselFetch } = useContext(MainContext);
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: SLIDES_TO_SCROLL,
  };

  return (
    carouselFetch.dataValue.drinks ? (
      <Slider { ...settings }>
        { carouselFetch.dataValue.drinks.map((item, index) => (
          <div key={ `${index}` } className="card-container card">
            <img
              className="card-image"
              src={ item.strDrinkThumb }
              alt="drink"
            />
            <h3
              data-testid={ `${index}-recommendation-title` }
              className="font-epilogue card-footer"
            >
              { item.strDrink }
            </h3>
          </div>
        ))}
      </Slider>
    ) : carouselFetch.dataValue.meals && (
      <Slider { ...settings }>
        { carouselFetch.dataValue.meals.map((item, index) => (
          <div key={ `${index}` } className="card-container card">
            <img
              className="card-image"
              src={ item.strMealThumb }
              alt="meals"
            />
            <h3
              data-testid={ `${index}-recommendation-title` }
              className="font-epilogue card-footer"
            >
              { item.strMeal }
            </h3>
          </div>
        ))}
      </Slider>
    )
  );
}
