import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ContactUsPage from './pages/contactus';
import ComingSoonPage from './pages/comingsoon';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/kontakt" component={ContactUsPage} exact />
        <Route path="/nie-znaleziono" component={ComingSoonPage} exact />
        <Route path="/*" component={ComingSoonPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
