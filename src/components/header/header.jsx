import React from "react";
import {PROPTYPES} from "../proptypes";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../const";

const Header = ({isLoggedIn, email})=>{

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
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isLoggedIn
                    ? <span className="header__user-name user__name">{email}</span>
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
  isLoggedIn: USER.authorizationStatus === AuthorizationStatus.AUTH,
  email: USER.email
});

Header.propTypes = PROPTYPES.header;

export {Header};
export default connect(mapStateToProps)(Header);
