import React from 'react';
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className={props.user?"cardsCont cardsContSender":"cardsCont"}>
      <div className={props.user?"cards cardsSender":'cards'}>
        <img className={props.user?"hide":""}src={props.image} alt="user"/>
         <p className={props.user?'msgSender':'msgUser'}>{props.mesg}</p>
      </div>
    </div>
  )
}

export default Cards