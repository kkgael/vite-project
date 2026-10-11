import { useState, useRef, useEffect } from "react";
import { useCarrinho } from "../context/CarrinhoContext";

import Half1 from "../assets/half1.png";
import Half2 from "../assets/half2.png";
import Half3 from "../assets/half3.png";
import Half4 from "../assets/half4.png";

export default function Half() {
  const { adicionarProduto, setMiniCarrinhoAberto } = useCarrinho();

  const imagens = [Half1, Half2, Half3, Half4];

  const [indiceVisual, setIndiceVisual] = useState(1);
  const [animando, setAnimando] = useState(true);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const bloqueado = useRef(false);

  const imagensCarrossel = [
    imagens[imagens.length - 1],
    ...imagens,
    imagens[0],
  ];

  const imagemAtual =
    (indiceVisual - 1 + imagens.length) % imagens.length;

  const produtoHalf = {
    id: "halfcab",
    nome: "Tênis Skate Half Cab Wafflecup Una White Gum",
    preco: 499.9,
    };

  function anterior() {
    if (bloqueado.current) return;

    bloqueado.current = true;
    setAnimando(true);
    setIndiceVisual((atual) => atual - 1);
  }

  function proxima() {
    if (bloqueado.current) return;

    bloqueado.current = true;
    setAnimando(true);
    setIndiceVisual((atual) => atual + 1);
  }

  function selecionarImagem(index) {
    if (bloqueado.current || index === imagemAtual) return;

    bloqueado.current = true;
    setAnimando(true);
    setIndiceVisual(index + 1);
  }

  function finalizarTransicao() {
    if (indiceVisual === imagens.length + 1) {
      setAnimando(false);
      setIndiceVisual(1);
    } else if (indiceVisual === 0) {
      setAnimando(false);
      setIndiceVisual(imagens.length);
    } else {
      bloqueado.current = false;
    }
  }

  useEffect(() => {
    if (animando) return;

    const primeiroFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimando(true);
        bloqueado.current = false;
      });
    });

    return () => cancelAnimationFrame(primeiroFrame);
  }, [animando]);

  // Adiciona o tênis e abre o carrinho lateral global.
  function adicionarAoCarrinho() {
    adicionarProduto(produtoHalf);
    setMiniCarrinhoAberto(true);
    }

  // Comprar agora também abre o carrinho lateral.
  function comprarAgora() {
    adicionarAoCarrinho();
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

          {/* GALERIA DE IMAGENS */}
          <div className="bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="relative w-full max-w-md">
              <div className="carrossel-janela">
                <div
                  className="carrossel-faixa"
                  style={{
                    transform: `translateX(-${indiceVisual * 100}%)`,
                    transition: animando ? undefined : "none",
                  }}
                  onTransitionEnd={finalizarTransicao}
                >
                  {imagensCarrossel.map((imagem, index) => (
                    <div
                      className="carrossel-slide"
                      key={`${imagem}-${index}`}
                    >
                      <img
                        src={imagem}
                        alt={`Tênis Half Cab - imagem ${
                          ((index - 1 + imagens.length) % imagens.length) + 1
                        }`}
                        draggable="false"
                        className="w-full aspect-square object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* SETA ESQUERDA */}
              <button
                type="button"
                onClick={anterior}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2
                bg-white/90 hover:bg-white text-black rounded-full
                w-10 h-10 flex items-center justify-center
                text-3xl shadow-md transition"
              >
                &#8249;
              </button>

              {/* SETA DIREITA */}
              <button
                type="button"
                onClick={proxima}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2
                bg-white/90 hover:bg-white text-black rounded-full
                w-10 h-10 flex items-center justify-center
                text-3xl shadow-md transition"
              >
                &#8250;
              </button>
            </div>

            {/* INDICADORES */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {imagens.map((imagem, index) => (
                <button
                  type="button"
                  key={imagem}
                  onClick={() => selecionarImagem(index)}
                  aria-label={`Ver imagem ${index + 1}`}
                  aria-current={imagemAtual === index ? "true" : undefined}
                  className={`rounded-full transition-all duration-300 ${
                    imagemAtual === index
                      ? "w-6 h-2.5 bg-black"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* INFORMAÇÕES DO PRODUTO */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {produtoHalf.nome}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-500">
                (Avaliações de clientes)
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Um clássico com personalidade. O Tênis Knu combina estilo
              urbano e conforto para completar seu visual no dia a dia.
            </p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
                {produtoHalf.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </p>

            {/* TAMANHOS */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-3">
                Tamanho
              </p>

              <div className="flex flex-wrap gap-3">
                {[38, 39, 40, 41, 42, 43].map((tamanho) => (
                  <button
                    type="button"
                    key={tamanho}
                    onClick={() => setTamanhoSelecionado(tamanho)}
                    aria-pressed={tamanhoSelecionado === tamanho}
                    className={`border rounded-lg px-4 py-2 transition ${
                      tamanhoSelecionado === tamanho
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {tamanho}
                  </button>
                ))}
              </div>
            </div>

            {/* COMPRAR AGORA */}
            <button
              type="button"
              onClick={comprarAgora}
              className="w-full bg-black text-white py-4 rounded-xl
              font-semibold hover:bg-gray-800 transition mb-3"
            >
              Comprar agora
            </button>

            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <p>✓ Consulte as opções de entrega disponíveis.</p>
              <p>✓ Compra segura.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}