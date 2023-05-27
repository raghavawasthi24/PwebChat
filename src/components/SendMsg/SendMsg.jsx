import React from "react";
import "./SendMsg.css";
import SendIcon from "@mui/icons-material/Send";
import AttachmentIcon from "@mui/icons-material/Attachment";

const SendMsg = () => {
  return (
    <div className="sendMsg">
      <div className="msgSend">
        <input placeholder="Reply to @Rohit Yadav" />
        <AttachmentIcon sx={{ rotate: "-60deg", margin: "0 2%",color:"gray" }} />
        <SendIcon sx={{color:"gray"}}/>
      </div>
    </div>
  );
};

export default SendMsg;
