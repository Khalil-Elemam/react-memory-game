import { useState } from 'react';
import MemoryGame from './components/MemoryGame';
import correct from './assets/correct.mp3'
import wrong from './assets/wrong.wav'
import './App.css';

function App() {

  const [username, setUsername] = useState(localStorage.getItem("username") || undefined)
  const [data, setData] = useState({username: ""})
  const correctAudio = new Audio(correct)
  const wrongAudio = new Audio(wrong)

  function handleSubmit(event) {
    event.preventDefault()
    if(!data.username || !data.username.trim()) return
    localStorage.setItem("username", data.username)
    setUsername(data.username)
  }

  return (
    <div className="App">
        {
          username ?
          <MemoryGame username={username} wrongAudio={wrongAudio} correctAudio={correctAudio}/>
          :
          <form onSubmit={handleSubmit}>
            <input
              name='username'
              type='text'
              placeholder='Username'
              onChange={e => setData(prevData => ({...prevData, username: e.target.value}))}
              value={data.username}
            />
            <button>Submit</button>
          </form>
        }
    </div>
  );
}

export default App;
