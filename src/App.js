import HeaderComponent from "./UI-Components/HeaderComponent";
import HomeComponent from "./UI-Components/HomeComponent";
import ProductPage from "./UI-Components/ProductPage";
import ProductFullDetailsComponent from "./UI-Components/ProductFullDetailsComponent";
import WebNavbarComponent from "./UI-Components/WebNavbarComponent";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HeaderComponent />
      <WebNavbarComponent />

      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="products/:category" element={<ProductPage/>}/>
        <Route path="/product/:title" element={<ProductFullDetailsComponent/>}/>

      </Routes>

    </>
  );
}

export default App;
