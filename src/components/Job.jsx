import React from 'react'
import "../components/styles/job.css"

function Job() {
    return (
        <div>
        <div className="job__card">
            <div className="campany__info">
                <div className="company__logo">
                    <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaVNSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f4952376eb7e3be044c58be0faa173878eb4fc2a/Rightmove%20Logo.png" alt=""/>
                </div>
                <div className="company__name">
                    <h3>Raycast</h3>
                </div>
            </div>
            <div className="job__info">
                <h2 className="job__location">Uyon, Germany</h2> &diams;
                <h2 className="job__date">2weeks ago</h2>
            </div>
            <div className="job__main">
                <h2 className="job__title">
                    Backend Developer - Rightmove.co.uk
                </h2>
                <p className="job__description">
                Exciting opportunity for a #backend #developer! \r\n\r\nAre you an expert in #Java, #Node, #Springboot
                </p>
            </div>
            <div className="apply__btn">
                <a href="#">Apply &rarr;</a>
            </div>
        </div>
        </div>
    )
}

export default Job
