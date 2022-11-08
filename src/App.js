import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import { Heading } from './MyComponents/Heading';
import { Courses } from './MyComponents/Courses';
import { Slides } from './MyComponents/Slides';
import { Contact } from './MyComponents/Contact';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Heading />
      <Navbar />
        <Routes>
          <Route path="/about" element={<About Greet="Mr.Nikam" Principal="Mr.Choughle" HOD="Mr.Samant" Chairman="Mr.Pal"/>}/>
          <Route path="/" element={[<Courses />,<Slides />]}/>
          <Route path="/home" element={[<Courses />,<Slides />]}/>
        </Routes>
        <Contact /> 
      </Router>
    </>
  );
}

export default App;
