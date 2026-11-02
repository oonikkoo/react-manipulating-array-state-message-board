import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("")
  const [list, setList] = useState([])

  function addList(event) {
    event.preventDefault()
    if(message.trim() === "") return
    const newList = [...list, message]
    setList(newList)
    setMessage("")
    //console.log(newList)
  }

  function deleteList(messageIndex) {
    const newList = [...list]
    newList.splice(messageIndex, 1)
    setList(newList)
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>

      <form onSubmit={addList}>
        <div className="message-input-container">
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>

          <button
            className="submit-message-button" 
          >
            Submit
          </button>
        </div>
      </form>

      <div className="board">
        <ul>
          {
            list.map((item, index) => {
              return (
                <li className="message" key={index}>
                  <h1>{item}</h1>
                  <button
                    className="delete-button"
                    onClick={() => deleteList(index)}
                  >
                    x
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;