import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./design/global/GlobalStyles";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
