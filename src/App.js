import React, { useState } from "react";
import "./styles.css";
import backgroundImage from "./img/8350970.png";
import buttonimage from "./img/button.png";
import Modal from "./components/modal.js";
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </head>
      <section id="header">
        <a href="#">
          <img src={require("./img/1logo.png")} className="logo" alt="" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cart.html">
                <i className="far fa-shopping-bag"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h4>Web3 Shopping</h4>
        <h2>Buying and Selling</h2>
        <h1>AT IT'S PEAK</h1>
        <p>Connecting buyers and sellers in the metaverse</p>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          style={{ backgroundImage: `url(${buttonimage})` }}
        >
          Shop now
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </section>

      {/* <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={require("./img/features/f1.png")} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f2.png")} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f3.png")} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f4.png")} alt="" />
          <h6>Promotion</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f5.png")} alt="" />
          <h6>Happy Selling</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f6.png")} alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section> */}
    </div>
  );
}
