import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="text-gray-500">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
