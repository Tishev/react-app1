import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import logoLocation from "../../assets/img/location.svg";
import { Link } from "react-router-dom";
import Popup from "../../components/styles/Popup/Popup";
const Header = () => {
  const [popup, setPopup] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="nav__logo">
            <Link to="/">
              <img src={logo} alt="lgog" />
            </Link>
          </div>
          <div className="nav__navigation">
            <ul className="nav__navigation-ul">
              <li onClick={() => setPopup(true)} className="nav__navigation-li">
                ЛИЧНЫЙ КАБИНЕТ
              </li>

              <li className="nav__navigation-li">О НАС</li>
              <li className="nav__navigation-li">НОВОСТИ И АКЦИИ</li>
              <li className="nav__navigation-li">КОНТАКТЫ</li>
              <li className="nav__navigation-li">БЛОГ</li>
            </ul>
          </div>
          <div className="nav__location">
            <img src={logoLocation} alt="location" />
            <p className="nav__location-p">ВОЛГОГРАД</p>
          </div>
        </div>
      </div>
      {popup && <Popup setPopup={setPopup} popup={popup} />}
    </header>
  );
};

export default Header;
