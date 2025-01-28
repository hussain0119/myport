import React from 'react'
import "./App.css";
import Sidebar from './components/sidebar';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Home from './components/home/index';
import Service from './components/service';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';




const App = () => {
  return (
        <>
        <Sidebar />
        <main className="main">
        <Home/>
        <About/>
        <Service/>
        <Resume/>
        <Portfolio/>
       <Pricing/>
       <Testimonials/>
       <Blogs/>
       <Contact/>
       </main>
       </>
    
  )
}

export default App