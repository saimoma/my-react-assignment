
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App  ()  {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
      
  )
}

export default App

























// import { BrowserRouter, Router, Router } from 'react-router-dom';
// import './App.css';
// // import Header from './Header.jsx'
// // import Footer from './Footer.jsx'
// import Food from './Food.jsx'

// function App() {

//     return(
//       <>
//       <BrowserRouter>
//          <Router>
//           <Router path='/' element={<Home/>}/>
//           <Router path='/blog' element={<Blog/>}/>
//           <Router path='/about' element={<About/>}/>
//           <Router path='/contact' element={<Contact/>}/>
//          </Router>
//       </BrowserRouter>
//       </>
//     );


// }

// export default App