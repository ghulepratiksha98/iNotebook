import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
     <div className="App">
      <h1>iNotebook</h1>
      <Router>
        <Navbar />


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
