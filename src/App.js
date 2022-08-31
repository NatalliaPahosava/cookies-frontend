import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleCake from './pages/SingleCake';
import AddCake from './pages/AddCake';
import './assets/styles.css'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/single-cake' element={<SingleCake/>}/>
    <Route path='add-cake' element={<AddCake/>}/>
    <Route path='*' element={<h2>Page not found</h2>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  
  );
}

export default App;
