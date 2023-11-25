import HeaderComponent from "./UI-Components/HeaderComponent";
import HomeComponent from "./UI-Components/HomeComponent";
import ProductPage from "./UI-Components/ProductPage";
import ProductFullDetailsComponent from "./UI-Components/ProductFullDetailsComponent";
import WebNavbarComponent from "./UI-Components/WebNavbarComponent";
import { Routes, Route } from 'react-router-dom'
import ProductCart from "./UI-Components/ProductCart";
import UserForm from "./UserProfileAuth/UserForm";
import UserLogin from "./UserProfileAuth/UserLogin";
import UserRegister from "./UserProfileAuth/UserRegister";
import MobileNavBar from "./UI-Components/MobileNavBar";

function App() {
  return (
    <>
      <HeaderComponent />
      <WebNavbarComponent />
      <MobileNavBar/>

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="products/:category" element={<ProductPage />} />
        <Route path="/product/:title" element={<ProductFullDetailsComponent />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/user" element={<UserForm />}>
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route />
        </Route>

      </Routes>

    </>
  );
}

export default App;
