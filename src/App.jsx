import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
// import Profile from './Profile';
// import User from './User';
import Form from './Form';
// import List from './List';
function App() {
  return (
    <>
      <BrowserRouter>
        <h2>Routes </h2>
        <Link className='btn' to='/'>Home</Link>
        <Link className='btn' to='/about'>About</Link>
         
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Form/>
        
      </BrowserRouter>
    </>
  );
}

export default App;


