import './App.css';
import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import {BrowserRouter as Router} from 'react-router-dom';
import InternShip from './components/internship/internship.component';
import Join from './components/join/join.component';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Banner/>
      <div className="container">
        <InternShip/>
        <Join/>
      </div>
      </div>
    </Router>
  );
}

export default App;
