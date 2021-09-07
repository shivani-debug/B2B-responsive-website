import React from "react" ;
import Cosmetic1 from "./Pages/Cosmetic1";
import Cosmetic2 from "./Pages/Cosmetic2";
import Cosmetic3 from "./Pages/Cosmetic3";
import Cosmetic4 from "./Pages/Cosmetic4";
import olayantioxidant from "./Pages/olayantioxidant";
import Merallite from "./Pages/Merallite";
import Himalaya from "./Pages/Himalaya";
import aroma from "./Pages/aroma";
import iconic from "./Pages/iconic";
import Palette from "./Pages/Palette";
import nontran from "./Pages/nontran";
import biotique from "./Pages/biotique";
import oriflame from "./Pages/oriflame";
import matteinno from "./Pages/matteinno";
import "./App.css";
import Header from './Components/header';
import Footer from './Components/footer';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Mamaearth from "./Pages/mamaearth";
import liquidfoundation from "./Pages/liquidfoundation";
import lotusherbal from "./Pages/lotusherbal";

function App() {
  return (
    <div classname="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Cosmetic1}/>
          <Route exact path='/cosmetic2' component={Cosmetic2}/>
          <Route exact path='/cosmetic3' component={Cosmetic3}/>
          <Route exact path='/cosmetic4' component={Cosmetic4}/>
          <Route exact path='/Olayantioxidant' component={olayantioxidant}/>
          <Route exact path='/merallite' component={Merallite}/>
          <Route exact path='/himalaya' component={Himalaya}/>
          <Route exact path='/Aroma' component={aroma}/>
          <Route exact path='/Mamaearth' component={Mamaearth}/>
          <Route exact path='/iconic' component={iconic}/>
          <Route exact path='/Palette' component={Palette}/>
          <Route exact path='/nontrans' component={nontran}/>
          <Route exact path='/liquidfoundation' component={liquidfoundation}/>
          <Route exact path='/biotique' component={biotique}/>
          <Route exact path='/lotusherbal' component={lotusherbal}/>
          <Route exact path='/oriflame' component={oriflame}/>
          <Route exact path='/matteinno' component={matteinno}/>

        </Switch>
        <Footer/>
      </Router>

    </div>
    
  );
}

export default App;
