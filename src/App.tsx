import React from 'react';
import Footer from './components/Footer/Footer';
import QuizBox from './components/QuizBox/QuizBox';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <>
      <QuizBox/>
      <Footer/>
      <GlobalStyles/>
    </>
  );
}

export default App;
