import React from 'react'
import HeadSection from './Components/HeadSection';
import BookInfo from './Components/BookInfo';
import LoginForms from './Components/LoginForms';

function DetailSection() {
  return (
    <React.Fragment>
      <HeadSection />
      <LoginForms />
      <BookInfo />
    </React.Fragment>
  )
}

export default DetailSection
