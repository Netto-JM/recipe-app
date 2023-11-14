import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/MainContext';
import RecipeDetails from '../components/RecipeDetails';

function DrinksDetails() {
  const { id } = useParams();
  const { carouselFetch, detailsFetch } = useContext(MainContext);

  useEffect(() => {
    const fetchDetails = async () => {
      await detailsFetch.fetchApiFiltered(`http://localhost:3001/drinks/${id}`);
      await carouselFetch.fetchApi('http://localhost:3001/meals');
    };
    fetchDetails();
  }, []);

  return (
    <div>
      {
        detailsFetch.dataValue.drinks && <RecipeDetails />
      }
    </div>
  );
}

export default DrinksDetails;
