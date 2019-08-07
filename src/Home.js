import React from 'react';
import BooksHead from './Components/BooksHead';
import Landing from './Components/Landing';
import FeatureCards from './Components/FeatureCards';
import HeadSection from './Components/HeadSection';
import LoginForms from './Components/LoginForms';
import BooksAndCatg from './Components/BooksAndCatg';

function Home() {
  return (
    <React.Fragment>
      <HeadSection />
      <LoginForms />
      <Landing />
      <FeatureCards />
      <BooksHead />
      <BooksAndCatg />
    </React.Fragment>
  )
}

export default Home
