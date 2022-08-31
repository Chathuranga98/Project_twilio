import React from "react";
import './index.css';

function SkillCard(){
    return (
      <div class="card">
        <div class="card-content">
          <div class="content">
            <img
              className="skill-card-image"
              src="https://res.cloudinary.com/chathuranga/image/upload/v1661970431/images_df0mhm.jpg"
            />

            <h1 className="title is-4">Work Card</h1>

            <p class="title is-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
          </div>
        </div>
      </div>
    );
}

export default SkillCard;