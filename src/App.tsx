import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/layouts/components/Header/Header";
import ValentinesPages from "./Pages/Valentines/Valentines";
import HomeIndex from "./Pages/Home";
import Footer from "./layouts/components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="w-full flex flex-col">
        {/* Header luôn cố định */}
        <div className=" top-0 z-50 bg-white">
          <Header />
        </div>

        {/* Nội dung chính có margin-top để không bị Header che mất */}
        <div>
          <Routes>
            <Route path="/" element={<HomeIndex />} />
            <Route path="/valentines" element={<ValentinesPages />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
