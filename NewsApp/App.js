import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/js/dist/dropdown.js"
import Home from './components/Home';
import Sports from './components/Sports';
import Business from './components/Business';
import Technology from './components/Technology';
import Search from './components/Search';
import Source from './components/Source';
import Navbar from './components/Navbar';
import Domain from './components/Domain';
import About from './components/About';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/business' element={<Business/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/domain' element={<Domain/>}/>
      <Route path='/source' element={<Source/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>   
  ) 
}

export default App;
