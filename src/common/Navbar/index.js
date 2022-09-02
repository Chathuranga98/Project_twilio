import React from "react";
import "./index.css";



function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png" alt="adadaf"
            width="112"
            height="28"
          />
        </a>

        <a href="https://chathuranga.me"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">Home</a>

          <a class="navbar-item" href="/about">About</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              
              <button class="button is-black">
                <span class="icon is-small">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </button>
              
              <button class="button is-link">
                <span class="icon is-small">
                <i class="fa-brands fa-facebook"></i>
                </span>
                <span>Facebook</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
