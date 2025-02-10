import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "@/layouts/components/Header/Header";
import ValentinesPages from "./Pages/Valentines/Valentines";
import HomeIndex from "./Pages/Home";
import Footer from "./layouts/components/Footer/Footer";
import ProductDetail from "./Pages/Products/DetailProducts";
import { useEffect } from "react";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Header luôn cố định */}
        <header className="sticky top-0 z-50 bg-white shadow">
          <Header />
        </header>

        {/* Nội dung chính */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeIndex />} />
            <Route path="/valentines" element={<ValentinesPages />} />
            <Route path="/details/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
