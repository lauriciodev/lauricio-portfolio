import { Route,Routes } from 'react-router-dom';
import Navbar from './components/sidebar';
import About from './pages/about';
import Home from './pages/home';
import "./global.css"
import Technologies from './components/techonologies';
import Projects from './components/projects';


function App() {
  return (
    <div className='container'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/technologies" element={<Technologies/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
    
    );
}

export default App;
