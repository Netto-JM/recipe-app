import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import MainContext from '../context/MainContext';

function Drinks() {
  const { fetchApi, dataValue, categoryFetch } = useContext(MainContext);

  useEffect(() => {
    const callApi = async () => {
      await fetchApi('http://localhost:3001/drinks');
      categoryFetch.setDataValue([]);
      await categoryFetch.fetchApi('http://localhost:3001/drinks/categories');
    };

    callApi();
  }, []);

  return (
    <div>
      <Header />
      {
        dataValue.drinks && <Recipes />
      }
      <Footer />
    </div>
  );
}

export default Drinks;
