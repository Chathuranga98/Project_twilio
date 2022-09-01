import React from "react";
import './index.css';

function SkillCard(props){
    return (
      <div class={props.color==="blue"?"card blue-card":(props.color==="yellow"? "card yellow-card" :"card green-card")}>
        <div class="card-content">
          <div class="content">
            <img
              className="skill-card-image"
              src="https://res.cloudinary.com/chathuranga/image/upload/v1661970431/images_df0mhm.jpg"
            />

            <h1 className="title is-4">{props.title}</h1>

            <p class="title is-6">
             {props.des}
            </p>
          </div>
        </div>
      </div>
    );
}

export default SkillCard;