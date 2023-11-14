import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainContext from './MainContext';
import useInput from '../hook/useInput';
import useFetch from '../hook/useFetch';

function MainProvider({ children }) {
  const [doneFilter, setDoneFilter] = useState('');
  const detailsFetch = useFetch();
  const categoryFetch = useFetch();
  const { dataValue, error, fetchApi } = useFetch();
  const filterFetch = useFetch();
  const carouselFetch = useFetch();
  const searchInput = useInput('');
  const radioInput = useInput('ingredient');
  const history = useHistory();
  const { pathname } = history.location;
  const IMEALS = `http://localhost:3001/meals/ingredients?q=${searchInput.value}`;
  const NMEALS = `http://localhost:3001/meals/name?q=${searchInput.value}`;
  const FMEALS = `http://localhost:3001/meals/letter?q=${searchInput.value}`;
  const IDRINKS = `http://localhost:3001/drinks/ingredients?q=${searchInput.value}`;
  const NDRINKS = `http://localhost:3001/drinks/name?q=${searchInput.value}`;
  const FDRINKS = `http://localhost:3001/drinks/letter?q=${searchInput.value}`;
  const ALERT = 'Your search must have only 1 (one) character';

  function searchValidation() {
    switch (radioInput.value) {
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
      if (pathname === '/meals') {
        return IMEALS;
      }
      return IDRINKS;
    }
  }

  function handleClickSearch() {
    fetchApi(searchValidation());
    searchInput.setValue('');
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
    detailsFetch,
    doneFilter,
    setDoneFilter,
    carouselFetch,
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
