import './App.css';
import Naviagete from './components/navigationbar/naviagete';
import FooterPage from './components/footer/footer-page';
import { Routes, Route } from "react-router-dom";
import LandPage from './components/landingPage/landingPage';
import ProductPage from './components/products/productPage';

function App() {
  return (
    <div className="App">
      <Naviagete />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
