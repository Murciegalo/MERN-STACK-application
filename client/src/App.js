import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import OverviewPage from './components/pages/Overview/OverviewPage';
import TourPage from './components/pages/Tour/TourPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={OverviewPage} />
        <Route path='/:id' component={TourPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;