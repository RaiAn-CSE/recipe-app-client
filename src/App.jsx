import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllRecipes from './pages/AllRecipes';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import './index.css'; // Make sure this path is correct
import './App.css'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<AllRecipes />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
);

export default App;
