import React, {useState} from 'react'
import './App.css'
import About from "./components/About.jsx";

function App() {
    const [showAbout, setShowAbout] = useState(true)


    return (
        <div>
            <button
                onClick={() => {
                    setShowAbout(!showAbout)
                }}
            >About
            </button>


            {  showAbout && <About/>  }

        </div>
    )
}

export default App
