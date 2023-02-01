import { Route,Routes } from 'react-router-dom';
import Navbar from './components/sidebar';
import About from './pages/about';
import Home from './pages/home';
import "./global.css"


function App() {
  return (
    <div className='container'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    
    );
}

export default App;
