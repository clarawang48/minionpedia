import React from "react";

const Card = (props) => {

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={props.picture} alt={props.name} style={{height:200, width:200}}/>

            <div> 
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default Card;