import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Previsionnel from './pages/Previsionnel';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/previsionnel" element={<Previsionnel />} />
      </Routes>
    </Router>
  );
}

export default App;
