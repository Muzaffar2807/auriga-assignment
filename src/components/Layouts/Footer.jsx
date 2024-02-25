import React from "react";
import "./Footer.scss";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaThumbsUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-div">
          <h2>USEFUL LINKS</h2>
          <ul>
            <div className="links-container">
              <div>
                <li>
                  <a href="#">Guest Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </div>

              <div>
                <li>
                  <a href="#">T & C</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
              </div>

              <div>
                <li>
                  <a href="#"> About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="subscribe-container">
          <h2>SUBSCRIBE</h2>

          <div className="form">
            <div>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="input-box"
                />{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email*"
                  className="input-box"
                />
              </div>

              <div className="button">
                <button>
                  <FaChevronRight color="#000" />
                </button>
              </div>
            </div>

            <div className="terms-conditions">
              <input type="checkbox" />

              <p>I accept Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div>
          <h2>SOCIAL</h2>

          <div className="social-icons">
            <div>
              <FaFacebookF color="#000" />
            </div>
            <div>
              <FaInstagram color="#000" />
            </div>
            <div>
              <FaTwitter color="#000" />
            </div>
            <div>
              <FaYoutube color="#000" />
            </div>
            <div>
              <FaPinterestP color="#000" />
            </div>
          </div>

          <div className="act-btns">
            <button className="like-btn">
              <FaThumbsUp />
              Like
            </button>
            <button className="share-btn">
              {" "}
              <FaFacebookF /> Share
            </button>
          </div>

          <div className="mt-8">
            <p>SOLES ON WHEELS © 2021 </p>
            <p> All Rights Reserved</p>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <a href="#">Destinations</a>

        <a href="#" className="pl-8">Covide-19 FAQ's</a>
      </div>
    </>
  );
};

export default Footer;
