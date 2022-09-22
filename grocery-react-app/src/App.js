import './App.css';

// Componets
import Header from './components/header/Header';
import ProductHolder from './components/product/ProductHolder';

// Hooks

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductHolder/>
    </div>
  );
}

export default App;
