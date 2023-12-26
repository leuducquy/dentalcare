import React from "react";

import  Navbar from './components/Navbar/Navbar'
import  Home from './components/Home'
import  About from './components/About'
import  Services from './components/Services/Services'
import  Process from './components/Process/Process'
import  Clients from './components/client/Clients'
import  Contact from './components/Contact'
import  SocialButton from './components/SocialButton.tsx'
import  Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
      <div className="fixed top-40 left-5 z-20">
            <SocialButton />
          </div>
          </div>
    </>
  );
}

export default App;
