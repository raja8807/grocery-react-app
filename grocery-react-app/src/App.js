import './App.css';

// Componets
import Header from './components/header/Header';
import ProductHolder from './components/product/ProductHolder';
import CategoryHolder from './components/category/CategoryHolder';
// import TopDeals from './components/topDeals/TopDeals';
import Home from './components/Home';
import Description from './components/description/Description';

// Hooks
import { Route, Routes } from 'react-router-dom';

import { login, logout } from './redux/reducers/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)
  const dispatch = useDispatch();
  // console.log(isLoggedIn);

  return (

    <div className="App">
      <Header />
      <h1>
        {`${isLoggedIn}`}
      </h1>
      <button onClick={() => {
        dispatch(login())
      }}>Login</button>
      <button onClick={() => {
        dispatch(logout())
      }}>Logout</button>
      <CategoryHolder />
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path='store/:category' element={<ProductHolder />} />
        <Route path='description/:category/:id' element={<Description />} />
      </Routes>


    </div>
  );
}
export default App;