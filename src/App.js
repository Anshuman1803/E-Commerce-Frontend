import HeaderComponent from "./UI-Components/HeaderComponent";
import HomeComponent from "./UI-Components/HomeComponent";
import ProductPage from "./UI-Components/ProductPage";
import ProductFullDetailsComponent from "./UI-Components/ProductFullDetailsComponent";
import WebNavbarComponent from "./UI-Components/WebNavbarComponent";
import { Routes, Route } from 'react-router-dom'
import ProductCart from "./UI-Components/ProductCart";
import ProductWishlist from "./UI-Components/ProductWishlist";

function App() {
  return (
    <>
      <HeaderComponent />
      <WebNavbarComponent />

      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="products/:category" element={<ProductPage/>}/>
        <Route path="/product/:title" element={<ProductFullDetailsComponent/>}/>
        <Route path="/cart" element={<ProductCart/>}/>
        <Route path="/wishlist" element={<ProductWishlist/>}/>

      </Routes>

    </>
  );
}

export default App;
