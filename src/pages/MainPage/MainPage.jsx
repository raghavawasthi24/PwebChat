import React, { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import SendMsg from "../../components/SendMsg/SendMsg";
import Header from "../../components/Header/Header";
let messageBox = [];


const MainPage = () => {
  const [messages, setMessages] = useState([]);
  const [chatdata,setChatdata]=useState([]);
  const [page,setPage]=useState(0);


  useEffect(() => {
    
    axios.get(`https://3.111.128.67/assignment/chat?page=${page}`).then((resp) => {
      console.log(resp.data);
      for (let i = 0; i < resp.data.chats.length; i++) {
        messageBox.push(resp.data.chats[i]);
      }
      console.log(messageBox)
      setMessages(messageBox);
      setChatdata(resp.data);
    });
    // eslint-disable-next-line
  },[page]);
  

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    console.log("2 called")
    // eslint-disable-next-line
  },[])

  const handleScroll=()=>{
    console.log("caling")
    
    if (window.scrollY > (document.body.offsetHeight - 800)){
      setPage(page+1);
      console.log("page valued change")
    }
  }

  return (
    <div className="mainpage">
      <Header from={chatdata.from} to={chatdata.to} name={chatdata.name} className="mainHead"/>
      <div className="msgSec">
        {messages.map((item) => {
          return <Cards mesg={item.message} image={item.sender.image} user={item.sender.self} verified={item.sender.is_kyc_verified}/>;
        })}
      </div>
      <SendMsg/>
    </div>
  );
};

export default MainPage;
