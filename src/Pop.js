import React from 'react'
import './Pop.scss';


function Pop({name}) {
    return (
        <div className="pop">
            <div className="pop__container">
                <div className="pop__customer">Orale {name}!</div>
                <p>Ready in 15-20min</p>
            </div>
        </div>
    )
}

export default Pop
