import React, { useEffect } from 'react'
import HeroSection from '../components/UI/HeroSection'
import About from './About'
import { useLocation } from 'react-router-dom';


const Home = () => {
  const {pathname} = useLocation();
  if(pathname==='/')
    document.title='worlAtlas_home';
  return (
    <>
      <HeroSection/>
      <About/>
    </>
  )
}

export default Home