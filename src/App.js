import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import GrandCanyon from './Components/GrandCanyon';
import Escocia from './Components/Escocia';
import MuralhaChina from './Components/MuralhaChina';
import Aruba from './Components/Aruba';

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Main />} />
          <Route path='/GrandCanyon' element={ <GrandCanyon />} />
          <Route path='/Escocia' element={ <Escocia />} />
          <Route path='/MuralhaChina' element={ <MuralhaChina/>} />
          <Route path='/Aruba' element={ <Aruba />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;