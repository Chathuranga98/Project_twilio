import React from "react";
import './index.css';
import SkillCard from "./components/SkillCard";

function HomeCards(){
    return(

        <section className="work-card-text">
            <h1 className="title is-3">What I do</h1>
            <div className="columns">
            <div className="column is-4"><SkillCard/></div>
            <div className="column is-4"><SkillCard/></div>
            <div className="column is-4"><SkillCard/></div>
            </div>
            
        </section>

    );
}

export default HomeCards;