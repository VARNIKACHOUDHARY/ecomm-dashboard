import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter, Routes , Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import ProductInfo from './pages/ProductInfo';
import './stylesheets/layout.css';
import './stylesheets/products.css';
import './stylesheets/authentication.css';

function App() {
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/productinfo/:productid' exact element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
          <Route path='/register' exact element={<RegisterPage />} />
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const ProtectedRoutes=({children})=>{

  if(localStorage.getItem('currentUser')){
    return children
  }
  else{

    return <Navigate to='/login'/>
  }

}
