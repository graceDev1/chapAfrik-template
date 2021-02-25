import './App.css';
import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Banner/>
      </div>
    </Router>
  );
}

export default App;
