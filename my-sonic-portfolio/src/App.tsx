// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./components/sections/Blog/BlogPost";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
