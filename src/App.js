import { Route,Routes } from 'react-router-dom';
import Navbar from './components/sidebar';
import About from './pages/about';
import Home from './pages/home';
import "./global.css"
import Technologies from './components/techonologies';


function App() {
  return (
    <div className='container'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/technologies" element={<Technologies/>} />
      </Routes>
    </div>
    
    );
}

export default App;
