import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/blog';
import Navbar from './components/NavBar';
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path = '/project' element = {<Project/>}/>
          <Route path = '/about' element = {<About/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
