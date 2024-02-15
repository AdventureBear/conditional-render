import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import TodoList from "./components/TodoList.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
    const [showAbout, setShowAbout] = useState(true)
    const [showHome, setShowHome] = useState(false)
    const [showTodoList, setShowTodoList] = useState(false)


    return (
        <div>

            <Sidebar
                setShowAbout={setShowAbout}
                setShowHome={setShowHome}
                setShowTodoList={setShowTodoList}
            />

            {  showAbout && <About/>  }

          <Home showHome={showHome} setShowHome={setShowHome} setShowAbout={setShowAbout} />

            {showTodoList && <TodoList/>}

        </div>
    )
}

export default App
