
import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);
  const [miniCarrinhoAberto, setMiniCarrinhoAberto] = useState(false);

  function adicionarProduto(produto) {
    setItens((atuais) => {
      const existente = atuais.find((item) => item.id === produto.id);

      if (existente) {
        return atuais.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...atuais, { ...produto, quantidade: 1 }];
    });
  }

  function removerProduto(id) {
    setItens((atuais) =>
      atuais
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function excluirProduto(id) {
    setItens((atuais) => atuais.filter((item) => item.id !== id));
  }

  function limparCarrinho() {
    setItens([]);
  }

  const quantidadeTotal = itens.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const valorTotal = itens.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarProduto,
        removerProduto,
        excluirProduto,
        limparCarrinho,
        quantidadeTotal,
        valorTotal,
        miniCarrinhoAberto,
        setMiniCarrinhoAberto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}