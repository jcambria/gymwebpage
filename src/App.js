import React from "react";

import Navbar from "./components/Navbar/Navbar";

import Header from "./components/Header/Header";

import "./App.css";
import WorkoutListTracker from "./components/WorkoutTracker/WorkoutListTracker";
import ContactUs from "./components/ContactUs/ContactUs";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import Trainers from "./components/Trainers/Trainers";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/EmailContact/ContactForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WhatWeOffer />
      <Trainers />
      <WorkoutListTracker />
      <ContactForm />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
