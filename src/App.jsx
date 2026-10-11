
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Sobre from "./about/page";
import Contato from "./Contato/page";
import Home from "./Home/page";
import Knu from "./knu1/page";
import Half from "./half-cab/page";
import Mixer from "./tb-mixer/page";
import Famue from "./famue-64/page"
import FinalizarCompra from "./checkout/page";
import { CarrinhoProvider } from "./context/CarrinhoContext";

function App() {
  return (
    <CarrinhoProvider>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><Sobre /></Layout>} />
        <Route path="/Contato" element={<Layout><Contato /></Layout>} />
        <Route path="/knu1" element={<Layout><Knu /></Layout>} />
        <Route path="/half-cab" element={<Layout><Half /></Layout>} />
        <Route path="/tb-mixer" element={<Layout><Mixer /></Layout>} />
        <Route path="/famue-64" element={<Layout><Famue /></Layout>} />
        <Route
          path="/checkout"
          element={<Layout><FinalizarCompra /></Layout>}
        />
      </Routes>
    </CarrinhoProvider>
  );
}

export default App;
