import React from "react";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
