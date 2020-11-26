import React from 'react'
import {Link} from "react-router-dom"
import "../components/styles/navbar.css"


function NavBar() {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="nav__brand">
                    <img src="https://www.webdeveloper.com/assets/logo-stnmhiza.png" alt="" srcset=""/>
                    </div>
                    <ul className="left__nav">
                        <li><Link to="/pagetwo">
                            <i class="large material-icons">bookmark_border</i>
                            Mentorship</Link>
                        </li>
                        <li><Link to="/pagetwo">
                            <i class="large material-icons">chat_bubble_outline</i>
                            Rooms</Link>
                        </li>
                        <li><Link to="/pagetwo">
                        <i class="large material-icons">person_outline</i>
                            Members</Link>
                        </li>
                    </ul>
                    <ul className="right__nav">
                        <li><Link to="/pagetwo">
                        <i class="large material-icons">lock_outline</i>
                            Login</Link>
                        </li>
                        <li><Link to="/pagetwo">
                            <i class="large material-icons">lock_open</i>
                            Join
                        </Link></li>
                        <li className="ask__btn"><Link to="/pagetwo">
                            <i class="large material-icons question">question_answer</i>
                            Ask Question
                        </Link></li>
                    </ul>
                </nav>
                <div className="search__box">
                    <h2>Connect with top-notch developers</h2>
                    <p>NoBadDevs have  a place for both junior and senior developer to learn and grow globally for free.</p>
                    <form>
                        <input type="text" placeholder="Search here..."/>
                        <button>Search</button>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default NavBar
