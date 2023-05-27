import React from 'react';
import "./Header.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='upperHead'>
        <ArrowBackIcon sx={{fontSize:"1.5rem"}}/>
        <p>{props.name}</p>
      </div>
      <div className='lowerHead'>
        <img src='https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0'/>
        <div className='travellDetail'>
            <p>From <span style={{fontWeight:"700"}}>{props.from}</span></p>
            <p>to <span style={{fontWeight:"700"}}>{props.to}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Header