import React from 'react';
import profile from '../images/profilePic.jpeg';
import {Link} from 'react-router-dom';

export default function Home(props) {
    return (
        <div>
            <div className="home__intro" >
                <div className="home__introduction">
                    <h1 className="home__header">Hi, I'm Emma,</h1>
                    <h2 className="home__description">Apprentice DevOps Developer at TalkTalk</h2>
                    <div className="profile__image">
                    <img src={profile} alt="profile-screenshot" />
                    </div>
                </div>
                <div className="home__content">
                    <div className="home__aboutme">
                        <p>Currently on a bootcamp grasping fundamentals of Javascript,React, Node & C#<br/>Check out my projects <Link to="/about" className="home__portfoliolink">Porfolio</Link></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}