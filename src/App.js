import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/food/:foodId' element={<FoodDetails/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
