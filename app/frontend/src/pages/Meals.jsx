import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import MainContext from '../context/MainContext';

function Meals() {
  const { fetchApi, dataValue, categoryFetch } = useContext(MainContext);

  useEffect(() => {
    const callApi = async () => {
      await fetchApi('http://localhost:3001/meals');
      categoryFetch.setDataValue([]);
      await categoryFetch.fetchApi('http://localhost:3001/meals/categories');
    };

    callApi();
  }, []);

  return (
    <div>
      <Header />
      {
        dataValue.meals && <Recipes />
      }
      <Footer />
    </div>
  );
}

export default Meals;
