import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchFavoriteOffers} from "../../store/api-actions";

const Header = ({isLoggedIn, loadFavorites})=>{

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user" onClick={loadFavorites}>
                <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isLoggedIn
                    ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    : <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


const mapStateToProps = ({USER}) => ({
  isLoggedIn: USER.isLoggedIn
});

const mapDispatchToProps = (dispatch)=>({

  loadFavorites() {
    dispatch(fetchFavoriteOffers());
  }

});

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loadFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
