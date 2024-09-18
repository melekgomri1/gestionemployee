import './App.css';
import Home from './Home';
import About from './About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Samia from './Samia';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/samia">Samiaa</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/samia" element={<Samia />} />
          <Route path="/contact/:name/:id" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
