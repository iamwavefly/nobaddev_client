import React from 'react'
import "../components/styles/toast.css"

function Toast({msg}) {
    return (
        <div>
            <div className="toast">{msg}</div>
        </div>
    )
}

export default Toast
