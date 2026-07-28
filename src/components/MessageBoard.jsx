import React, { useState } from "react";

function MessageBoard() {

  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newMessage = [...messages]
    newMessage.push(messageText);
    setMessages(newMessage);
    setMessageText("");
  }

  function handleDelete(index) {
    const newMessage = [...messages];
    newMessage.splice(index, 1);
    setMessages(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={() => handleDelete(index)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
