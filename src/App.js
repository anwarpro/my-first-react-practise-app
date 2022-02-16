import Header from "./components/Header";
import { useState } from "react"
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div className="App">
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
        <Routes>
          <Route path="/" element={<Home showAddTask={showAddTask} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
