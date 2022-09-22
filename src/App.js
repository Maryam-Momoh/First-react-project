import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home"
import NewsLetter from './components/pages/NewsLetter';
import NewArrival from './components/pages/NewArrival';
import Products from './components/pages/Products';

// import "./components/images"


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/home' element = {< Home/>}/>
        <Route path='/new-arrival' element = {< NewArrival/>}/>
        <Route path='/products' element = {< Products/>}/>
        <Route path='/news-letter' element = {< NewsLetter/>}/>
      </Routes>
    </>
  )
}

export default App;
