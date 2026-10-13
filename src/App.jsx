
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Sobre from "./about/page";
import Contato from "./contato/page";
import Home from "./Home/page";
import FinalizarCompra from "./checkout/page";
import ProdutoPage from "./produto/page";
import { CarrinhoProvider } from "./context/CarrinhoContext";

function App() {
  return (
    <CarrinhoProvider>
      <Routes>
        <Route
          path="/"
          element={<Layout><Home /></Layout>}
        />

        <Route
          path="/about"
          element={<Layout><Sobre /></Layout>}
        />

        <Route
          path="/contato"
          element={<Layout><Contato /></Layout>}
        />

        <Route
          path="/checkout"
          element={<Layout><FinalizarCompra /></Layout>}
        />

        {/* Todos os produtos usam a mesma página */}
        <Route
          path="/:id"
          element={<Layout><ProdutoPage /></Layout>}
        />
      </Routes>
    </CarrinhoProvider>
  );
}

export default App;
