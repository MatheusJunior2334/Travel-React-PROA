//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Grand_Canyon from './Components/Grand_Canyon';
import Escocia from './Components/Escocia';
import Muralha_China from './Components/Muralha_China';
import Aruba from './Components/Aruba';

function App() {
  return (
    <main className="App">
      <Header />
      <Main />
      <Grand_Canyon />
      <Escocia />
      <Muralha_China />
      <Aruba />
      <Footer />
    </main>
  );
}

export default App;
