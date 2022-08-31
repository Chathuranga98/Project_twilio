import React from "react";
import './index.css';
import HomeHero from "./components/HomeHero";
import HomeCards from "./components/HomeCards";

function Homepage(){
    return(

        <div>
        <HomeHero/>
        <HomeCards/>
        </div>

    );
}

export default Homepage;