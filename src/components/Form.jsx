import React, { Component } from 'react'
import Axios from "axios"
import "../components/styles/form.css"

export default class Form extends Component {
    state = {
        title: "",
        content: "",
        language: "",
    }
 
    handleRemove = (e) => {
        const alert__form = document.querySelector(".alert__form")
        const alert__inner = document.querySelector(".alert__inner")
        alert__form.classList.remove("show__alert")
        alert__inner.classList.remove("show__alert__inner")
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value);
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        Axios.post("http://quiet-sea-73798.herokuapp.com/api/post/new", this.state)
        .then(res => {
            window.location = "/"
        })
        .catch(err => console.log(err))

        const toast = document.querySelector(".toast")
        toast.classList.add("show__toast")

    }

    //  postReq = async () => {
        
    // }

    render() {
        return (
            <div>
                <div className="alert__form">
                    <div className="alert__inner">
                        <div className="form__header">
                            <div className="alert__title">Ask your question</div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form__group">
                                <label htmlFor="title">Title</label>
                                <input type="text" onChange={this.handleInput} name="title" id="title" value={this.state.title} placeholder="What is react native?"/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="language">language</label>
                                <select onChange={this.handleInput} id="language" name="language">
                                    <option selected default disabled>Choose language</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="PHP">PHP</option>
                                    <option value="Python">Python</option>
                                    <option value="C++">C++</option>
                                    <option value="C#">C#</option>
                                    <option value="Java">Java</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="content">Description</label>
                                <textarea onChange={this.handleInput} id="content" name="content" value={this.state.content} placeholder="Enter your description here {optional}"></textarea>
                            </div>
                            
                            <div className="button__group">
                                <a href="#" onClick={this.handleRemove}>Cancel</a>
                                <button type="submit">Ask Question</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
