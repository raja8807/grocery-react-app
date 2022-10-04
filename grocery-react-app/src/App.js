import './App.css';

// Componets
import Header from './components/header/Header';
import ProductHolder from './components/product/ProductHolder';
import CategoryHolder from './components/category/CategoryHolder';
// import TopDeals from './components/topDeals/TopDeals';
import Home from './components/Home';
import Description from './components/description/Description';
import CartHolder from './components/cart/CartHolder';
import Login from './components/Login/Login';
import SignUp from './components/Login/Signup';
import NotFound from './components/NotFound';

// Hooks
import { Route, Routes } from 'react-router-dom';
import { login, logout } from './redux/reducers/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)
  const dispatch = useDispatch();

  return (

    <div className="App">

      <Header />
      {/* <h1>
        {`${isLoggedIn}`}
      </h1>
      <button onClick={() => {
        dispatch(login())
      }}>Login</button>
      <button onClick={() => {
        dispatch(logout())
      }}>Logout</button> */}
      
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path='store/:category' element={<ProductHolder />} />
        <Route path='description/:category/:id' element={<Description />} />
        <Route path='cart' element={isLoggedIn ? <CartHolder /> : <Login />} />
        <Route path='cart' element={isLoggedIn ? <CartHolder /> : <Login />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}
export default App;