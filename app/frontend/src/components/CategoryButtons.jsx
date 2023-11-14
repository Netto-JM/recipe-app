import { useContext, useState } from 'react';
import MainContext from '../context/MainContext';
import imgPlate from '../images/plateIcon.svg';
import imgCow from '../images/cowIcon.svg';
import imgGoat from '../images/goatIcon.svg';
import imgChicken from '../images/chickenIcon.svg';
import imgBreakfast from '../images/breakfastIcon.svg';
import imgDessert from '../images/dessertIcon.svg';
import imgOrdinary from '../images/ordinaryIcon.svg';
import imgCocktail from '../images/cocktailIcon.svg';
import imgShake from '../images/shakeIcon.svg';
import imgOther from '../images/otherIcon.svg';
import imgCocoa from '../images/cocoaIcon.svg';
import '../style/Category.css';

const MEALS_ICONS = [imgCow, imgGoat, imgChicken, imgBreakfast, imgDessert];
const DRINKS_ICONS = [imgOrdinary, imgCocktail, imgShake, imgOther, imgCocoa];

function CategoryButtons() {
  const { categoryFetch, filterFetch } = useContext(MainContext);
  const [cat, setCat] = useState('');
  const { dataValue } = categoryFetch;
  const NUMBER5 = 5;
  const URLMEAL = 'http://localhost:3001/meals/filter?q=';
  const URLDRINK = 'http://localhost:3001/drinks/filter?q=';

  function toggleFilterMeal(category, url) {
    if (cat === category) {
      filterFetch.setDataValue([]);
      setCat('');
    } else {
      filterFetch.fetchApiFiltered(`${url}${category}`);
      setCat(category);
    }
  }

  function handleAllClick() {
    filterFetch.setDataValue([]);
  }

  function handleLinkClick(category, url) {
    toggleFilterMeal(category, url);
  }

  return (
    <div className="category-container">
      <div
        className="category-btn"
        onClick={ handleAllClick }
        onKeyDown={ (e) => {
          if (e.key === 'Enter') {
            handleAllClick();
          }
        } }
        role="button"
        tabIndex={ 0 }
      >
        <img
          className="options-img"
          src={ imgPlate }
          alt="type"
        />
        <button
          className="link-text"
          data-testid="All-category-filter"
          onClick={ handleAllClick }
        >
          All
        </button>
      </div>
      {dataValue.meals && (
        dataValue.meals.slice(0, NUMBER5).map((meal, index) => {
          const { strCategory } = meal;
          return (
            <div
              key={ `${strCategory}${index}` }
              className="category-btn"
              onClick={ () => handleLinkClick(strCategory, URLMEAL) }
              onKeyDown={ (e) => {
                if (e.key === 'Enter') {
                  handleLinkClick(strCategory, URLMEAL);
                }
              } }
              role="button"
              tabIndex={ 0 }
            >
              <img
                className="options-img"
                src={ MEALS_ICONS[index] }
                alt="options"
              />
              <button
                className="link-text"
                data-testid={ `${strCategory}-category-filter` }
                onClick={ () => handleLinkClick(strCategory, URLMEAL) }
              >
                {strCategory}
              </button>
            </div>
          );
        })
      ) }
      {dataValue.drinks && (
        dataValue.drinks.slice(0, NUMBER5).map((drinks, index) => {
          const { strCategory } = drinks;
          return (
            <div
              key={ `${strCategory}${index}` }
              className="category-btn"
              onClick={ () => handleLinkClick(strCategory, URLDRINK) }
              onKeyDown={ (e) => {
                if (e.key === 'Enter') {
                  handleLinkClick(strCategory, URLDRINK);
                }
              } }
              role="button"
              tabIndex={ 0 }
            >
              <img
                className="options-img"
                src={ DRINKS_ICONS[index] }
                alt="options"
              />
              <button
                className="link-text"
                data-testid={ `${strCategory}-category-filter` }
                onClick={ () => handleLinkClick(strCategory, URLDRINK) }
              >
                {strCategory}
              </button>
            </div>
          );
        })
      ) }
    </div>
  );
}

export default CategoryButtons;
