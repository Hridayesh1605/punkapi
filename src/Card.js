import React from 'react'
import './index.css';

const Card = (props) => {

    console.log(props.image_url);
    console.log(props.name);
  return (
    <>
    <div className="cards">
        <div className="card">
            <img src={props.image_url} alt="" className="card_img"/>
            <div className="card_info">
                <span className="card_description">{props.description}</span>
                <h3 className="card_title">{props.name}</h3>
                
            </div>

        </div>

        </div>
      
    </>
  )
}

export default Card
