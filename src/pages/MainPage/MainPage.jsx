import React, { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import Cards from "../../components/Cards/Cards";

const MainPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let messageBox = [];
    axios.get("https://3.111.128.67/assignment/chat?page=0").then((resp) => {
      console.log(resp.data.chats);
      for (let i = 0; i < resp.data.chats.length; i++) {
        messageBox.push(resp.data.chats[i]);
      }
      setMessages(resp.data.chats);
    });
  },[]);

  return (
    <div className="mainpage">
      {messages.map((item) => {
        return <Cards mesg={item.message} image={item.sender.image} user={item.sender.self}/>;
      })}
    </div>
  );
};

export default MainPage;
