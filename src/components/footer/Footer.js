import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="partners">
          <div className="partners_left">
            <div className="partners_logo">
              <img src={logo1} alt="#" />
            </div>
            <div className="partners_logo">
              <img src={logo2} alt="#" />
            </div>
            <div className="partners_logo">
              <img src={logo3} alt="#" />
            </div>
            <div className="partners_logo">
              <img src={logo4} alt="#" />
            </div>
          </div>
          <div className="partners_right">
            <div className="partners_logo">
              <img src={logo1} alt="#" />
            </div>
            <div className="partners_logo">
              <img src={logo2} alt="#" />
            </div>
            <div className="partners_logo">
              <img src={logo3} alt="#" />
            </div>
            <div className="partners_logo">
              <img src={logo4} alt="#" />
            </div>
          </div>
        </div>
        <div className="footerContent">
          <div className="footer_logo">
            <p className="logo">LOGO</p>
          </div>

          <div className="moreContent">
            <div className="moreContent_title">
              <h5>Узнать больше</h5>
            </div>
            <div className="moreContent_links">
              <p href="#">О нас</p>
              <p href="#">Природа</p>
              <p href="#">Вакансии</p>
              <p href="#">Свяжитесь с нами</p>
            </div>
          </div>

          <div className="contacts">
            <div className="contacts_title">
              <h5>Контакты</h5>
            </div>
            <div className="contacts_content">
              <div>
                Отель <span>+996 123 456 789</span>
              </div>
              <div>
                Вход <span>+996 123 456 789</span>
              </div>
            </div>
          </div>

          <div className="media">
            <div className="media_title">
              <h5>Медиа</h5>
            </div>
            <div className="mediaList">
              <div className="mediaList_item">
                <FaFacebookF />
              </div>
              <div className="mediaList_item">
                <FaInstagram />
              </div>
              <div className="mediaList_item">
                <FaTwitter />
              </div>
              <div className="mediaList_item">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <p>© 2022 INAI | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
