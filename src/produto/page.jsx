
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";
import { produtos } from "../data/produtos";

export default function ProdutoPage() {
  const { id } = useParams();
  const { adicionarProduto, setMiniCarrinhoAberto } = useCarrinho();

  const produto = produtos.find((item) => item.id === id);

  const [indice, setIndice] = useState(0);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  if (!produto) {
    return (
      <section className="px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">
          Produto não encontrado
        </h1>

        <Link to="/" className="mt-4 inline-block underline">
          Voltar para a loja
        </Link>
      </section>
    );
  }

  const imagens = produto.imagens || [];
  const tamanhos = produto.tamanhos || [];

  function comprarAgora() {
    if (tamanhos.length > 0 && tamanhoSelecionado === null) {
      alert("Selecione um tamanho antes de continuar.");
      return;
    }

    adicionarProduto({
      ...produto,
      id:
        tamanhoSelecionado !== null
          ? `${produto.id}-${tamanhoSelecionado}`
          : produto.id,
      nome:
        tamanhoSelecionado !== null
          ? `${produto.nome} — ${tamanhoSelecionado}`
          : produto.nome,
      tamanho: tamanhoSelecionado,
    });

    setMiniCarrinhoAberto(true);
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">

          {/* GALERIA DE IMAGENS */}
          <div className="flex flex-col items-center justify-center bg-gray-50 p-8">
            <div className="relative w-full max-w-md">

              {/* CARROSSEL */}
              <div className="w-full overflow-hidden">
                <div
                  className="flex w-full transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${indice * 100}%)`,
                  }}
                >
                  {imagens.map((imagem, index) => (
                    <div
                      key={`${imagem}-${index}`}
                      className="w-full flex-none"
                    >
                      <img
                        src={imagem}
                        alt={`${produto.nome} - imagem ${index + 1}`}
                        draggable="false"
                        className="block aspect-square w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SETA ESQUERDA */}
              {imagens.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setIndice(
                      (atual) =>
                        (atual - 1 + imagens.length) % imagens.length
                    )
                  }
                  aria-label="Imagem anterior"
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl text-black shadow-md transition hover:bg-white"
                >
                  &#8249;
                </button>
              )}

              {/* SETA DIREITA */}
              {imagens.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setIndice((atual) => (atual + 1) % imagens.length)
                  }
                  aria-label="Próxima imagem"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl text-black shadow-md transition hover:bg-white"
                >
                  &#8250;
                </button>
              )}
            </div>

            {/* BOLINHAS INDICADORAS */}
            {imagens.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-2">
                {imagens.map((imagem, index) => (
                  <button
                    type="button"
                    key={`${imagem}-bolinha-${index}`}
                    onClick={() => setIndice(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                    aria-current={
                      indice === index ? "true" : undefined
                    }
                    className={`rounded-full transition-all duration-300 ${
                      indice === index
                        ? "h-2.5 w-6 bg-black"
                        : "h-2.5 w-2.5 bg-gray-300 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* INFORMAÇÕES DO PRODUTO */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {produto.nome}
            </h1>

            <p className="mb-6 leading-relaxed text-gray-600">
              {produto.descricao}
            </p>

            {/* PREÇOS */}
            <div className="mb-6">
              {produto.precoOriginal && (
                <p className="text-lg text-gray-400 line-through">
                  {produto.precoOriginal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}

              <p className="text-3xl font-bold text-gray-900">
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            {/* TAMANHOS */}
            {tamanhos.length > 0 && (
              <div className="mb-6">
                <p className="mb-3 font-semibold text-gray-800">
                  Tamanho
                </p>

                <div className="flex flex-wrap gap-3">
                  {tamanhos.map((tamanho) => (
                    <button
                      type="button"
                      key={tamanho}
                      onClick={() => setTamanhoSelecionado(tamanho)}
                      aria-pressed={tamanhoSelecionado === tamanho}
                      className={`rounded-lg border px-4 py-2 transition ${
                        tamanhoSelecionado === tamanho
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      }`}
                    >
                      {tamanho}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* COMPRAR AGORA */}
            <button
              type="button"
              onClick={comprarAgora}
              className="mb-3 w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Comprar agora
            </button>

            {/* INFORMAÇÕES ADICIONAIS */}
            <div className="mt-3 space-y-2 text-sm text-gray-500">
              <p>✓ Consulte as opções de entrega disponíveis.</p>
              <p>✓ Compra segura.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
