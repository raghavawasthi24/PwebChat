import React from 'react';
import "./Cards.css";
import VerifiedIcon from '@mui/icons-material/Verified';

const Cards = (props) => {
  return (
    <div className={props.user?"cardsCont cardsContSender":"cardsCont"}>
      <div className={props.user?"cards cardsSender":'cards'}>
        <div  className={props.user?"hide":""} style={{position:"relative"}}>
          <img src={props.image} alt="user"/>
          <VerifiedIcon style={{fontSize:"1rem",position:"absolute",bottom:"0",right:"0",color:"#1C63D5",backgroundColor:"white",borderRadius:"50%",display:props.verified?"block":"none"}}/>
        </div>
         <p className={props.user?'msgSender':'msgUser'}>{props.mesg}</p>
      </div>
    </div>
  )
}

export default Cards