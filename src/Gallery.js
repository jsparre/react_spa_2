import React, { Component } from "react";
import Parafrett1 from "./pics/frett_badge.jpg";
import Parafrett2 from "./pics/badge_w_illu.jpg";
import Parafrett3 from "./pics/illu_portrait_new_k.png"
import Grendor1 from "./pics/badge_w_jens.jpg";
import Bloody1 from "./pics/blood_halfi.png";
import Bloody2 from "./pics/werewolf_blatt.jpg";


class Gallery extends Component {
    render(){
        return(
            <div>
                <div>
                    <h2>My Gallery</h2>
                    <p>Here you can see my artworks.</p>
                </div>
                <div className="images">
                    <p>Ferrets</p>
                    <img src={Parafrett1} />
                    <img src={Parafrett2} />
                    <img src={Parafrett3} />

                    <p>Wolves</p>
                    <img src={Grendor1} />

                    <p>Werewolves</p>
                    <img src={Bloody1} />
                    <img src={Bloody2} />
                </div>
            </div>
        );
    }
}

export default Gallery;