import React from "react";
import "./FirstPage.css";
import {Link} from 'react-router-dom';

const FirstPage = () => {
  return (
    <div id="container">
      <h1 id="quote"> “A single pint can save three lives, <br></br>a single gesture can create a million smiles”</h1>
      <Link to="/Donate"  style={{ textDecoration: 'none' }}>
      <button id="btn-donate">DONATE</button>
      </Link>
      <Link to="/Search"  style={{ textDecoration: 'none' }}>
      <button id="btn-signup">SEARCH ?</button>
      </Link>
    </div>
  );
};

export default FirstPage;
