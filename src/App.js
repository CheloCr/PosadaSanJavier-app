import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import OneProduct from "./pages/OneProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./components/Pay";

import { BrowserRouter as Router, Route, Routes, Redirec} from 'react-router-dom'
import Sucess from "./pages/Sucess";



function App() {

  const user = true 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/pay" element={<Home/>} /> */}
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<OneProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<Sucess/>} />
      </Routes>
    </Router>



  );
}

export default App;


