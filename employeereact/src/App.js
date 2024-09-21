import './App.css';
import Home from './Home';
import About from './About';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Samia from './Samia';
import Contact from './Contact';
import Kamel from './Kamel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/samia" activeClassName="active">Samiaa</NavLink>
          <NavLink to="/samia/kamel" activeClassName="active1">Kamel</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/samia" element={<Samia />} />
          <Route path="/samia/kamel" element={<Kamel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
