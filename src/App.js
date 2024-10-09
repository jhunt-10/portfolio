import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import AlgorithmicTrading from './pages/AlgorithmicTrading';
import AlgoTrading from './pages/AlgoTrading';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/algorithmic-trading" element={<AlgorithmicTrading />} />
        <Route path="/algorithmic-trading-2" element={<AlgoTrading />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
