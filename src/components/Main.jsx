import React from 'react'
import "../components/styles/main.css"
import JavaScript from "../components/img/javascript.png"
import Php from "../components/img/php.png"
import Python from "../components/img/python.png"
import Java from "../components/img/java.png"
import cSharp from "../components/img/csharp.png"
import cPlus from "../components/img/c++.png"

import Feed from "../components/Feed"

function Main() {
    return (
        <div>
            <div className="language__section">
                <div className="box1">
                    <div className="lang__logo">
                        <img src={JavaScript} alt=""/>
                    </div>
                    <h2>JavaScript</h2>
                    <p>23,000 questions</p>
                </div>
                <div className="box2">
                    <div className="lang__logo">
                        <img src={Php} alt=""/>
                    </div>
                    <h2>PHP</h2>
                    <p>53,000 questions</p>
                </div>
                <div className="box3">
                    <div className="lang__logo">
                        <img src={Java} alt=""/>
                    </div>
                    <h2>Java</h2>
                    <p>200,000 questions</p>
                </div>
                <div className="box4">
                    <div className="lang__logo">
                        <img src={cSharp} alt=""/>
                    </div>
                    <h2>C#</h2>
                    <p>12,160 questions</p>
                </div>
                <div className="box5">
                    <div className="lang__logo">
                        <img src={cPlus} alt=""/>
                    </div>
                    <h2>C++</h2>
                    <p>24,000 questions</p>
                </div>
                <div className="box6">
                    <div className="lang__logo">
                        <img src={Python} alt=""/>
                    </div>
                    <h2>Python</h2>
                    <p>203,000 questions</p>
                </div>
            </div>
            <main className="main__container">
                <div className="sidebar__left">
                    Left
                </div>
                <div className="main">
                    <div className="main__header">
                        <i class="large material-icons">highlight</i>
                        <h2>Questions for you</h2>
                    </div>
                    
                    <Feed language="JavaScript" date_added="2months ago." headline="Can teachers tell when a student is going through something?" tagline="Your time is too precious to be pushing pixels around–it's time to shift gears and develop code faster." answer="2" />
                    <Feed language="Php" date_added="4months ago." headline="What is a technical design document and functional design document in a web application?" tagline="Your time is too precious to be pushing pixels around–it's time to shift gears and develop code faster." answer="2" />
                    <Feed language="Python" date_added="2weeks ago." headline="Can teachers tell when a student is going through something?" tagline="Your time is too precious to be pushing pixels around–it's time to shift gears and develop code faster." answer="2" />
                    <Feed language="JavaScript" date_added="an hours ago." headline="Can teachers tell when a student is going through something?" tagline="Your time is too precious to be pushing pixels around–it's time to shift gears and develop code faster." answer="2" />
                    <Feed language="C++" date_added="20 minutes ago." headline="Can teachers tell when a student is going through something?" tagline="Your time is too precious to be pushing pixels around–it's time to shift gears and develop code faster." answer="2" />
                    <Feed language="Goland" date_added="1months ago" headline="Can teachers tell when a student is going through something?" tagline="Your time is too precious to be pushing pixels around–it's time to shift gears and develop code faster." answer="2" />
                </div>
                <div className="sidebar__right">
                    Right
                </div>
            </main>
        </div>
    )
}

export default Main
