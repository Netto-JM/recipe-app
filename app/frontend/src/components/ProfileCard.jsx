import { useHistory } from 'react-router-dom';
import imgChecked from '../images/checkedIcon.svg';
import imgFavorites from '../images/favoriteIcon.svg';
import imgLogout from '../images/logoutIcon.svg';
import '../style/Profile.css';

function ProfileCard() {
  const history = useHistory();
  const handleDoneRecipesButtonClick = () => {
    history.push('/done-recipes');
  };

  const handleFavoriteRecipesButtonClick = () => {
    history.push('/favorite-recipes');
  };

  const handleLogoutButtonClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <body className="profile-container">
      {localStorage.getItem('user') && (
        <h3 className="user-email-container" data-testid="profile-email">
          {JSON.parse(localStorage.getItem('user')).email}
        </h3>
      )}

      <div
        className="box profile-box"
        onClick={ handleDoneRecipesButtonClick }
        onKeyDown={ (e) => {
          if (e.key === 'Enter') {
            handleDoneRecipesButtonClick();
          }
        } }
        role="button"
        tabIndex={ 0 }
      >
        <img src={ imgChecked } alt="imgChecked" className="yellow-icon" />
        <button
          className="profile-btns button is-white"
          data-testid="profile-done-btn"
          onClick={ handleDoneRecipesButtonClick }
        >
          Done Recipes
        </button>
      </div>

      <div
        className="box profile-box"
        onClick={ handleFavoriteRecipesButtonClick }
        onKeyDown={ (e) => {
          if (e.key === 'Enter') {
            handleFavoriteRecipesButtonClick();
          }
        } }
        role="button"
        tabIndex={ 0 }
      >
        <img src={ imgFavorites } alt="imgFavorites" className="yellow-icon" />
        <button
          className="profile-btns button is-white"
          data-testid="profile-favorite-btn"
          onClick={ handleFavoriteRecipesButtonClick }
        >
          Favorite Recipes
        </button>
      </div>

      <div
        className="box profile-box"
        onClick={ handleLogoutButtonClick }
        onKeyDown={ (e) => {
          if (e.key === 'Enter') {
            handleLogoutButtonClick();
          }
        } }
        role="button"
        tabIndex={ 0 }
      >
        <img src={ imgLogout } alt="imgLogout" className="yellow-icon" />
        <button
          className="profile-btns button is-white"
          data-testid="profile-logout-btn"
          onClick={ handleLogoutButtonClick }
        >
          Logout
        </button>
      </div>
    </body>
  );
}

export default ProfileCard;
