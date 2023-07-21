import React from "react";
import { Link } from "react-router-dom";
import imageone from "../images/frogseatingapples.png";
import imagetwo from "../images/frogswithumbrellas.png";

export default function Home() {
  return (
    <div>
      <div className="clothing">
        <div className="clothing-text">
          <h2>Clothing</h2>
          <p>
            Original clothing for original Frogs. We got shirts, shoes,
            trousers. You want it we got it. only the best clothes for the up
            and coming frogs.
          </p>
        </div>
      </div>
      <div className="clothing-images">
        <img src={imageone} alt="frogseatingapples" />
        <img src={imagetwo} alt="frogswithumbrellas" />
      </div>
      <div>
        <Link to="/products" className="btn btn-primary">
          View our products here!
        </Link>
      </div>
    </div>
  );
}
