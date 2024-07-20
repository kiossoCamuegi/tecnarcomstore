import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import Contacts from "./Pages/Main/Contacts";
import Search from "./Pages/Main/Search";
import ProductDetails from "./Pages/Main/ProductDetails";
import { ToastContainer } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./Pages/Authentication/Signup";
import Signin from "./Pages/Authentication/Signin";
import Dashboard from "./Pages/UserAccount/Dashboard";
import CompareProducts from "./Pages/Main/CompareProducts";
import CreateProduct from "./Dashboard/CreateProduct";
import Offers from "./Pages/Main/Offers";
import NotFounded from "./Pages/Main/NotFounded";
import Blog from "./Pages/Main/Blog";
import About from "./Pages/Main/About";

function App() {
  return (
    <div>
       <ToastContainer />
         <Router>
             <Routes>
                  <Route path="/"  element={<Home />} />
                  <Route path="*"  element={<NotFounded />} />
                  <Route path="/contacts"  element={<Contacts  />} />
                  <Route path="/useraccount"  element={<Dashboard  />} />
                  <Route path="/signup"  element={<Signup  />} />
                  <Route path="/signin"  element={<Signin  />} />
                  <Route path="/products"  element={<Search   />} />
                  <Route path="/product_details"  element={<ProductDetails  />} />
                  <Route path="/compare"  element={<CompareProducts  />} />
                  <Route path="/blog"  element={<Blog  />} /> 
                  <Route path="/about"  element={<About  />} /> 
                  <Route path="/offers"  element={<Offers  />} /> 
             </Routes>
         </Router>
    </div>
  );
}

export default App;
