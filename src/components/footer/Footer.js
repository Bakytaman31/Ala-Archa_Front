import React from "react";

import alaArchaLogo from "../../assets/лого.png"
import fc from "../../assets/facebook.png";
import tw from "../../assets/twitter.png";

import KT from "../../assets/KT_logo.png";
import shoro from "../../assets/Shoro_logo.png";
import kettik from "../../assets/kettik_logo.png";
import ak_sai from "../../assets/Ak-Sai_logo.png";
import BKK from "../../assets/BKK_logo.png"

import inst from "../../assets/instagram.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="info-groups">
          <div className="info-group" id="alaArchaLogo">
            <img src={alaArchaLogo} alt="ala archa logo" />
          </div>
          <div className="info-group" id="contact">
          <div className="info_link">
            <a href="/contact">
            Контакты
            </a>
            </div>
          <div className="info_link">
            <a href="admin">
            Администратор
            </a>
            </div>
          <div className="info_link">
            <a href="manager">
            Менеджер(PR-маркетинг)
            </a>
            </div>
          <div className="info_link">
            <a href="ala-archa@list.kg">
            ala-archa@list.kg
            </a>
            </div>
          <div className="info_link">
            <a href="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%88%D0%BA%D0%B0-%D0%A1%D1%83%D1%83/@42.6920243,74.5259067,15.42z/data=!4m5!3m4!1s0x389934f7df13da01:0x754131f3abd8ec19!8m2!3d42.6953197!4d74.5316807">
            Кыргызская Республика, Чуйская обл, Аламудунский р-н, село Кашка-Суу
            </a>
            </div>
          </div>
          <div className="info-group" id="social-media">
           <div className="title">
            <h5>Соц. сети</h5>
           </div>
           <div className="content">
           <div className="social-media">
              <a href="https://www.facebook.com" >
                <img src={fc} alt="facebook icon" />
              </a>
            </div>
            <div className="social-media">
              <a href="https://www.instagram.com" >
                <img src={inst} alt="instagram icon" />
              </a>
            </div>
            <div className="social-media">
              <a href="https://www.twitter.com" >
                <img src={tw} alt="twitter icon" />
              </a>
            </div>
           </div>
          </div>
          <div className="info-group" id="partners">
            <div className="title">
              <h5>Наши партнеры</h5>
            </div>
            <div className="content">
              <div className="upside">
                <div className="logo">
                  <img src={KT} alt="" />
                </div>
                <div className="logo">
                  <img src={shoro} alt="" />
                </div>
                <div className="logo">
                  <img src={kettik} alt="" />
                </div>
              </div>
              <div className="downside">
                <div className="logo">
                  <img src={ak_sai} alt="" />
                </div>
                <div className="logo">
                  <img src={BKK} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
