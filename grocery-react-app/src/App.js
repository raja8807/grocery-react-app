import './App.css';

// Componets
import Header from './components/header/Header';
import ProductHolder from './components/product/ProductHolder';
import CatagoryHolder from './components/catagory/CatagoryHolder';
// import TopDeals from './components/topDeals/TopDeals';
import Home from './components/Home';

// Hooks
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <CatagoryHolder />
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path='store/:catagory' element={<ProductHolder/>}/>
      </Routes>
    </div>
  );
}

export default App;
