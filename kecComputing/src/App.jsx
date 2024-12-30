
;
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Samplefunc/Home';
import About from './Components/Samplefunc/About';
import Gallery from './Components/Samplefunc/Gallery';
import Contact from './Components/Samplefunc/Contact';
import NavBar from './Components/Samplefunc/Navbar';
import Form from './Components/Samplefunc/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
      <Form/>
    </div>
  );
}

export default App;
