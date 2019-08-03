import React from 'react';
import AllBooks from './Components/AllBooks';
import BooksHead from './Components/BooksHead';
import Pages from './Components/Pages';
import Landing from './Components/Landing';
import FeatureCards from './Components/FeatureCards';
import HeadSection from './Components/HeadSection';
import LoginForms from './Components/LoginForms';

function Home() {
  return (
    <React.Fragment>
      <HeadSection />
      <LoginForms />
      <Landing />
      <FeatureCards />
      <BooksHead />
      <AllBooks />
      <Pages />
    </React.Fragment>
  )
}

export default Home
