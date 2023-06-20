import React from 'react';
import './App.css';
import {Route, Routes, Switch} from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NewsFeed from './components/NewsFeed';
import Job from './components/Job';
import Updates from './components/Updates';

const App = () => {
  return (
    <>
      <NavBar/>
    <div className='container'>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/newsfeed' element={<NewsFeed/>}/>
        <Route path='/updates' element={<Updates/>}/>
        <Route path='/job' element={<Job/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App