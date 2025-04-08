// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./components/sections/Blog/BlogPost";
import Footer from "./components/Footer";
import { useEmeralds } from "./contexts/EmeraldContext";
import styles from "./components/shared-styling/SuperSonic.module.css";

function App() {
  const { isSuperSonic } = useEmeralds();

  return (
    <div className={isSuperSonic ? styles.superSonicMode : ""}>
      {isSuperSonic && <div className={styles.auraEffect} />}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
