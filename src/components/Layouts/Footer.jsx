import React from 'react';
import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <div>
        <div>
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>
              <a href="#">Guest Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">T & C</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#"> About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>SUBSCRIBE</h2>

          <div className="form">
            <div>
              <div className="input-container">
                <input type="text" placeholder="Full Name*" />
                <input type="email" placeholder="Email*" />
              </div>

              <div className="button">
                <button>
                  {" "}
                  <p> enter</p>
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="act-btns">
            <button>Like</button>
            <button>Share</button>
          </div>

          <div>SOLES ON WHEELS © 2021 All Rights Reserved</div>
        </div>
      </div>

      <div className="bottom-footer">
        <a href="#">Destinations</a>

        <a href="#">Covide-19 FAQ's</a>
      </div>
    </>
  );
}

export default Footer