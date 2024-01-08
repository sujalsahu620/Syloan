import styles from "../Styles/Footer.module.css";
import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div id={styles.Footer}>
      <DIV>
        <div className="footer-upper">
          <div>
            <h1>
              Growth <span className="gradient-text">Your Business</span> ,Take
              Your Step with Us!
            </h1>
          </div>
          <div>
            <button>Contact us</button>
          </div>
        </div>
        <hr />
        <div className="footer-lower">
          <div>
            <h2>SyLoan</h2>
            <p>
              No matter how your customers want pay, we can help you find the
              right
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaTwitter />
              </div>
            </div>
          </div>
          <div>
            <h2>Quick Menu</h2>
            <p>Use Cases</p>
            <p>Product</p>
            <p>Company</p>
            <p>Support</p>
          </div>
          <div>
            <p>
              <span style={{ marginRight: "20px" }}>
                <FaLocationDot />
              </span>
              8502 Preston Rd. Inglewood, Maine 98380, USA
            </p>
            <p>
              <span style={{ marginRight: "20px" }}>
                <MdEmail />
              </span>{" "}
              info@syloan.co
            </p>
          </div>
        </div>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  background-color: #0e0a20;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 70px;
  text-align: left;

  .footer-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
  }
  .footer-upper h1 {
    font-size: 2.5rem;
    width: 80%;
  }
  .footer-upper button {
    border: 0;
    padding: 1rem 2rem;
    border-radius: 30px;
    background-color: #52dffe;
    cursor: pointer;
  }
  hr {
    width: 90%;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
  }
  .footer-lower {
    display: flex;
    justify-content: space-around;
  }
  .footer-lower p {
    color: #808080;
  }
  .footer-lower > div {
    width: 30%;
  }
  .gradient-text {
    background: linear-gradient(
      45deg,
      #52dffe,
      #6085f9,
      #6085f9,
      #53dafd,
      #0e0a20
    );
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 550px) {
    .footer-upper h1 {
      font-size: 1.5rem;
      width: 80%;
    }
    .footer-lower {
      font-size: 0.8rem;
    }
    .footer-upper button {
      padding: 0.5rem 1rem;
      font-size: 0.7rem;
    }
    .footer-lower {
      /* flex-direction: column; */
    }
  }
`;
