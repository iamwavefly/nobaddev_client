import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Link} from "react-router-dom"

import Forum from "../components/Forum"
 

function App() {
    const PageOne = () => {
        return(
            <div>
                PageOne <br/>
                <Link to="/pagetwo">Go to page Two</Link><br/>
                <Link to="/pagethree">Go to page Three</Link>

            </div>
        )
    }
    const PageTwo  = () => {
        return(
            <div>
                PageTwo <br/>
                <Link to="/">Go to page One</Link><br/>
                <Link to="/pagethree">Go to page Three</Link>

            </div>
        )
    }
    const Three  = () => {
        return(
            <div>
                Three <br/>
                <Link to="/">Go to page One</Link><br/>
                <Link to="/pagetwo">Go to page Two</Link>
            </div>
        )
    }
    
    
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Forum} />
                    <Route path="/pagetwo" component={PageTwo} />
                    <Route path="/pageThree" component={Three} />
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App
