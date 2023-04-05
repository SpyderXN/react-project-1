import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>SpyderX</h1>
          <p>Solution to all of your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            React (also known as React.js or ReactJS) is a free and open-source
            front-end JavaScript library for building user interfaces based on
            components
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            "Who We Are" is a song by American rock band Imagine Dragons. The
            song was originally recorded for the 2013 Soundtrack album The
            Hunger Games: Catching Fire – Original Motion Picture Soundtrack,
            which serves as the official soundtrack to the 2013 American
            science-fiction adventure film The Hunger Games: Catching Fire. It
            appears as the seventh track on the album.[1]
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
