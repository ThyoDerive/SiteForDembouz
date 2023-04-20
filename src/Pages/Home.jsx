import React from "react";

import imgNewletter from '../assets/Newletter.jpg'
import imgPack from '../assets/pack-speciaux.png'
import { dataAllProg } from "../data/dataProg";
import Pub from "../Components/Pub";
import { Link } from "react-router-dom";

export default function Home(){

    return(
        <div id="Home">

            <Pub link='/le-pilier-du-charisme' title='Le PILIER DU CHARISME: Devenir charismatique et enfin séduire la femme de tes rêves' price="199,99€"/>


            <section className="all-programme-container">
                {
                    dataAllProg.map(data => (
                        <div className="programme-content" key={data.key}>
                            <img src={data.img} alt="" className="programme-img" />

                            <div className={(data.key % 2) == 0 ? "programme-information programme-information-even" : "programme-information"}>
                                <p className="programme-price">{data.price}</p>
                                <Link to={data.link} className="programme-title">{data.title}</Link>
                                <span className="programme-desc">{data.desc}</span>

                                <Link to={data.link} className="programme-button">Accéder à la formation</Link>
                            </div>
                        </div>
                    ))
                }
            </section>

            <section className="pack-speciaux">
                <img src={imgPack} alt="" />

                <h1>LES PACKS SPECIAUX !</h1>

                <span>
                    <a href="">MEGAPACK SEDUCTION</a>
                    <a href="">MEGAPACK BUSINESS</a>
                </span>
            </section>

            <section className="newletter">
                <img src={imgNewletter} alt="" />

                <div className="newletter-info">
                    <h1 className="newletter-title">Apprendre à faire des rencontres et séduire en quelques mails !</h1>

                    <p className="newletter-desc">Entrez votre email pour recevoir <strong>gratuitement</strong> ma <strong>newsletter</strong> 👇</p>

                    <label htmlFor="newletter">
                        <input type="email" name="mail" id="mail" required placeholder="Email"/>
                        <button type="submit">Rejoindre + de 40 000 inscrits</button>
                    </label>

                    <p className="last-desc-newletter">C'est gratuit, et vous pourrez vous désinscrire à tout moment.</p>
                </div>
            </section>
        </div>
    )
}