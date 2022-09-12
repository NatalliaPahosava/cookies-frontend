import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleCake from './pages/SingleCake';
import AddCake from './pages/AddCake';
import Contact from './pages/Contact';
import Discount from './pages/Discount';
import About from './pages/About';
import './assets/styles.css'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/single-cake' element={<SingleCake/>}/>
    <Route path='/add-cake' element={<AddCake/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about-me' element={<About/>}/>
    <Route path='/discount' element={<Discount/>}/>
    <Route path='*' element={<h2>Page not found</h2>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  
  );
}

export default App;
