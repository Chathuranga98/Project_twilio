import React from "react";
import './index.css';
import HomeHero from "./components/HomeHero";
import HomeCards from "./components/HomeCards";
import Contact from "./components/Contact";



function Homepage(){
    return(

        <div>
        <HomeHero/>
        <HomeCards/>
        <Contact/>
        </div>

    );
}

export default Homepage;