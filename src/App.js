import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Main from './pages/main/main'
import 'antd/dist/antd.css'
import HeaderComponent from './components/Header'


//Sayfalar
import Birislem from './pages/onenumber/Birislem'
import Birkelime from './pages/oneword/Birkelime'
//Sayfalar

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/bir-islem" component={Birislem}/>
          <Route exact path="/bir-kelime" component={Birkelime}/>
        </Switch>
      </Router>
       
    </div>

  );
}

export default App;
