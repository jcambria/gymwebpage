
import React from 'react'

import Navbar from './components/Navbar/Navbar';

import Header from './components/Header/Header';

import "./App.css";
import WorkoutListTracker from './components/WorkoutTracker/WorkoutListTracker';
import PersonalTrainingForm from './components/Questionaire/PersonalTrainingForm';
import ContactUs from './components/ContactUs/ContactUs';

// const images = [
//     'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg',
//     'https://media.gq-magazine.co.uk/photos/60250691a29397b3791c6cfa/master/w_1600%2Cc_limit/110221_FD_01.jpg',
    
//   ];




const App = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <WorkoutListTracker />
        <ContactUs />
        {/* <PersonalTrainingForm /> */}
       
      
    </div>
  )
}

export default App
