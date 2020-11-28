import React, {useState, useEffect} from 'react'
import "../components/styles/main.css"
import Axios from "axios"
import moment from "moment"
import Job from "../components/Job"
// import JavaScript from "../components/img/javascript.png"
// import Php from "../components/img/php.png"
// import Python from "../components/img/python.png"
// import Java from "../components/img/java.png"
// import cSharp from "../components/img/csharp.png"
// import cPlus from "../components/img/c++.png"
import Feed from "../components/Feed"

export default class Main extends React.Component{

    state = ({
        posts: []
    })

    handleModal = () => {
        const alert__form = document.querySelector(".alert__form")
        const alert__inner = document.querySelector(".alert__inner")
        alert__form.classList.add("show__alert")
        alert__inner.classList.add("show__alert__inner")
    }
    vote = async (id) =>{
        const res = await Axios.put(`https://nobaddev.herokuapp.com/api/post/v/${id}`)
        console.log(res);
        document.querySelector(".upvote_btn").remove()
    }
    async componentDidMount(){
        const res = await Axios.get("https://nobaddev.herokuapp.com/api/posts")
        this.setState({posts: res.data.message})
    }

    render(){
        return (
            <div>
                {/* <div className="language__section">
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
                </div> */}
                <main className="main__container">
                    <div className="sidebar__left">
                        <div className="ask__question-btn">
                            <button onClick={this.handleModal}>Ask Question</button>
                        </div>
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                    </div>
                    <div className="main">
                        <div className="main__header">
                            <i class="large material-icons">highlight</i>
                            <h2>Questions for you</h2>
                        </div>
                        
                        {this.state.posts.map(res => <Feed headline={res.title.length > 65 ? res.title.substr(0, 65) + "..." : res.title} tagline={res.content.length > 160 ? res.content.substr(0, 160) + "..." : res.content} language={res.language} asked_by={res.createdBy && res.createdBy.username} date_added={moment(res.createdAt.toLocaleDateString).fromNow()} id={res._id} handleVote={this.vote} voteCount={res.score}/>)}

                    </div>
                    <div className="sidebar__right">
                        Right
                    </div>
                </main>
            </div>
        )
    }
}
