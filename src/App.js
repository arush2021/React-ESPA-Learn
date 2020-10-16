import React from 'react';
import Navsection from './Components/Navbar'
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Contactus from './Components/Contactus'
import Schoolingsystem from './Components/Schoolingsystem';
import Vocationalcourses from './Components/Vocationalcourses';
import Digitalstudio from './Components/Digitalstudio';
function App() {
  return (
   <>
    <div className="App bgnav">

      <Navsection />
     
    </div>
    <Switch>
      <Route exact  path="/"  component={Homepage} />
      <Route exact  path="/partner"  component={Contactus} />
      <Route exact  path="/schooling"  component={Schoolingsystem} />
      <Route exact  path="/vocationalcourses"  component={Vocationalcourses} />
      <Route exact  path="/digitalstudio"  component={Digitalstudio} />
    </Switch>
   
    <Footer/>
   </>
  
  );
}

export default App;
