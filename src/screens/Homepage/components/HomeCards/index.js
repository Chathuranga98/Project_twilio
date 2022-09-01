import React from "react";
import './index.css';
import SkillCard from "./components/SkillCard";

function HomeCards(){
    return (
      <section className="work-card-text">
        <h1 className="title is-3">What I do</h1>
        <div className="columns">
          <div className="column is-4">
            <SkillCard
              color="blue"
              title="Brand IdentifyBuilding"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
            />
          </div>
          <div className="column is-4">
            <SkillCard
              color="yellow"
              title="Comunity Development"
              des="The Data Encryption Standard (DES) is a symmetric-key block cipher published by the National Institute of Standards and Technology"
            />
          </div>
          <div className="column is-4">
            <SkillCard
              color="green"
              title="Content Strategy"
              des="The Data Encryption Standard (DES) is a symmetric-key block cipher published by the National Institute of Standards."
            />
          </div>
        </div>
      </section>
    );
}

export default HomeCards;