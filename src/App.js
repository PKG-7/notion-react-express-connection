import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [extraInfo, setExtraInfo] = useState("")

  function submitFormToNotion() {
    console.log("We are in!" + name);
    fetch("http://localhost:4000/submitFormToNotion", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        extraInfo: extraInfo
      })
    }).then(response => response.json())
    .then(data => {
      console.log('Success', data);
    }).catch((error) => {
      console.log('Error: ', error);
    })
  }

  return (
    <div className="App">
      <div className='text'>
        <h1>Interested to suck some deck?</h1>
        <p>Name</p>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} />

        <p>Number</p>
        <input type="text" id="name" onChange={(e) => setPhoneNumber(e.target.value)} />

        <p>Info</p>
        <textarea onChange={e => setExtraInfo(e.target.value)} cols="25" rows="10"></textarea>

        <div>
          <button onClick={submitFormToNotion}>
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
