import React from "react";
// import "./home.scss";
import NaverAPIMap from "./NaverAPIMap";

const HomeContainer = () => {
    return(
        <div className={"outline"}>
            <div className={"container"}>
                <div className="nav"> nav bar </div>
                <h1>Map</h1>
                <div className={"map"}></div>
            </div>
        </div>
    )
}

export default HomeContainer