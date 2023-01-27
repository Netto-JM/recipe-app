import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import MainContext from './MainContext';
import useInput from '../hook/useInput';
import useFetch from '../hook/useFetch';

function MainProvider({ children }) {
  const fetchApiDetails = useFetch();
  const categoryFetch = useFetch();
  const { dataValue, error, fetchApi } = useFetch();
  const filterFetch = useFetch();
  const searchInput = useInput('');
  const radioInput = useInput('ingredient');
  const history = useHistory();
  const { pathname } = history.location;
  const IMEALS = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput.value}`;
  const NMEALS = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
  const FMEALS = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput.value}`;
  const IDRINKS = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput.value}`;
  const NDRINKS = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
  const FDRINKS = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput.value}`;
  const ALERT = 'Your search must have only 1 (one) character';

  function searchValidation() {
    switch (radioInput.value) {
    case 'ingredient':
      if (pathname === '/meals') {
        return IMEALS;
      }
      return IDRINKS;
    case 'name':
      if (pathname === '/meals') {
        return NMEALS;
      }
      return NDRINKS;
    case 'first-letter':
      if (pathname === '/meals') {
        return (
          searchInput.value.length > 1 ? (
            global.alert(ALERT)
          ) : (FMEALS)
        );
      }
      return (
        searchInput.value.length > 1 ? (
          global.alert(ALERT)
        ) : (FDRINKS)
      );
    default:
      return 'asd';
    }
  }

  function handleClickSearch() {
    fetchApi(searchValidation());
  }

  const valueSearch = useMemo(() => ({
    searchInput,
    radioInput,
    dataValue,
    error,
    categoryFetch,
    filterFetch,
    fetchApi,
    handleClickSearch,
    fetchApiDetails,
  }), [searchInput, radioInput]);

  return (
    <MainContext.Provider value={ valueSearch }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainProvider;
