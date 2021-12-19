import React from "react";

const Message = (props) => {
  return (
    <div className="Message">
      <p>{props.text}</p>
    </div>
  );
};

export default Message;
