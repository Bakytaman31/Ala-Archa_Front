import React from "react";
import "./Header.css";
import logo from "../../assets/лого.png"
import rus from "../../assets/Rus.png"
import account from "../../assets/iconSignUp.png"

function Header() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="center">
          <div className="navlink">
            <a href="/">Главная</a>
          </div>
          <div className="navlink">
            <a href="/about">О нас</a>
          </div>
          <div className="navlink">
            <a href="/rooms">Услуги</a>
          </div>
          <div className="navlink">
            <a href="/contact">Контакты</a>
          </div>
        </div>
        <div className="right">
          <div className="items">
            <div className="item">
              <img src={account} alt="" />
            </div>
            <div className="item">
              <img src={rus} alt="" />
            </div>
            <div className="item">
              <p>Рус</p>
            </div>
          </div>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
