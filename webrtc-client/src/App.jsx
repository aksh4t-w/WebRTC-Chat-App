import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import Options from './Options'
import Notifications from './Notifications'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1 style={{marginBottom: '35px'}}>Video Chat App</h1>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

    </div>
  )
}

export default App
