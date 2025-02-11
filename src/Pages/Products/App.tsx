import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./cartContext";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
