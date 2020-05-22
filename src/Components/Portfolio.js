import React from 'react';
import playerdicegame from '../images/2playerdicegame.png';
import cashmachine from '../images/cashmachine.png';
import imagesearcher from '../images/unsplashimagesearcher.png';



export default function Portfolio() {
    return (
        <div className="about__container">
            <div className="about__content">
                <h1 className="about__header">PORTFOLIO</h1>
                <ul className="about__images">
                    <li className="about__portfolio"> 
                        <h5>Cash Machine JS</h5>
                        <a href="https://mealouise.github.io/cashMachineJS">
                            <img className="home__screenshot" src={cashmachine} alt="screenshot" />
                        </a>
                    </li>
                    <li className="about__portfolio"> 
                        <h5>Image Searcher JS</h5>
                        <a href="https://mealouise.github.io/dynamicHtmlImages/">
                            <img className="home__screenshot" src={imagesearcher} alt="screenshot" />
                        </a>
                    </li>
                    <li className="about__portfolio"> 
                        <h5>2 Player Dice Game JS</h5>
                        <a href=" https://mealouise.github.io/twoPlayerDiceGame/">
                            <img className="home__screenshot" src={playerdicegame} alt="screenshot" />
                        </a>
                    </li>
                </ul>
            
            </div>
                
        </div>
    )
}