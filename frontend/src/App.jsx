import GlobalStyles from "./design/global/GlobalStyles";
import Header from "./components/layout/header/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Header />
    </Router>
    </>
  )
}

export default App
