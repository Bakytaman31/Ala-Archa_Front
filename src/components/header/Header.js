import React from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import FlagRu from "../../assets/russia.png";

function Header() {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="div_logo">
          <span className="logo">LOGO</span>
        </div>

        <div className="links">
          <div>
            <a href="#">Главная</a>
          </div>

          <div>
            <a href="#"> О нас</a>
          </div>

          <div>
            <a href="#">Услуги</a>
          </div>

          <div>
            <a href="#">Контакты</a>
          </div>
        </div>

        <div className="icons">
          <div>
            <a href="#">
              <FaSearch />
            </a>
          </div>

          <div>
            <a href="#">
              <FaUserAlt />
            </a>
          </div>

          <div>
            <div className="language">
              <div className="lang_icon">
                <img src={FlagRu} alt="#" />
              </div>

              <div className="lang_text">
                <p>РУС</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="wrapperText">
        <div className="title">
          <h2>Ала-Арча</h2>
        </div>

        <div className="subTitle">
          <h2>Национальный парк</h2>
        </div>

        <button>Узнать больше</button>
      </div>
    </div>
  );
}

export default Header;
