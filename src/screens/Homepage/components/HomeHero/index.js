import React from "react";
import "./index.css";

function HomeHero() {
  return (
    <section>
      <div className="columns">
        <div className="column is-6 hero-text-column">
          <h1 className="title is-5">Hi, My name is Chathuranga</h1>
          <h1 className="title is-2">
            I am freelance UX/UI Designer with a marketing background
            specializing is shpify & Webflow
          </h1>

          <button class="button is-pink mr-2">
            <span class="icon">
            <i class="fa-brands fa-dribbble"></i>
            </span>
            <span>Dribble</span>
          </button>

          <button class="button is-link">
            <span class="icon">
            <i class="fa-brands fa-linkedin"></i>
            </span>
            <span>Linkedin</span>
          </button>
        </div>
        <div className="column is-6 has-text-centered">
          <img
            className="hero-image "
            src="https://res.cloudinary.com/chathuranga/image/upload/v1661965368/cld-sample-2.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
