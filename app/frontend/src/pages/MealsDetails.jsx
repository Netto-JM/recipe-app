import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/MainContext';
import RecipeDetails from '../components/RecipeDetails';

function MealsDetails() {
  const { id } = useParams();
  const { carouselFetch, detailsFetch } = useContext(MainContext);
  useEffect(() => {
    const fetchDetails = async () => {
      await detailsFetch.fetchApiFiltered(`http://localhost:3001/meals/${id}`);
      await carouselFetch.fetchApi('http://localhost:3001/drinks');
    };
    fetchDetails();
  }, []);

  return (
    <div>
      {
        detailsFetch.dataValue.meals && <RecipeDetails />
      }
    </div>
  );
}

export default MealsDetails;
