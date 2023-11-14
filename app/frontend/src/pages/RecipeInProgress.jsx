import { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MainContext from '../context/MainContext';
import LocalStorageContext from '../context/LocalStorageContext';
import DrinksInProgress from '../components/DrinksInProgress';
import MealsInProgress from '../components/MealsInProgress';

function RecipeInProgress() {
  const { id } = useParams();
  const { detailsFetch } = useContext(MainContext);
  const { functions } = useContext(LocalStorageContext);
  const history = useHistory();
  const { pathname } = history.location;
  const type = pathname.split('/')[1];

  useEffect(() => {
    const fetchDetails = async () => {
      if (type === 'meals') {
        await detailsFetch.fetchApiFiltered(`http://localhost:3001/meals/${id}`);
        return;
      }
      await detailsFetch.fetchApiFiltered(`http://localhost:3001/drinks/${id}`);
    };
    fetchDetails();
    functions.addInProgress(type, id);
  }, []);

  return <div>{type === 'meals' ? <MealsInProgress /> : <DrinksInProgress />}</div>;
}

export default RecipeInProgress;
