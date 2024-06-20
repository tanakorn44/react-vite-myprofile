import React from "react";
import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__container grid">
            <Social />

            <div>
            </div>

            <Data/>
        </div>
      </div>
    </section>
  );
};

export default Home;
