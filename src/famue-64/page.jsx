import { useState, useRef, useEffect } from "react";
import { useCarrinho } from "../context/CarrinhoContext";

import Famue1 from "../assets/famue1.png";
import Famue2 from "../assets/famue2.png";

export default function Famue() {
  const { adicionarProduto, setMiniCarrinhoAberto } = useCarrinho();

  const imagens = [Famue1, Famue2];

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

  const produtoFamue = {
    id: "famue",
    nome: "Famue MP3 Player 64GB 2.7 polegadas",
    preco: 189.99,
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
    adicionarProduto(produtoFamue);
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
                        alt={`mp3 famue - imagem ${
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
                {produtoFamue.nome}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-500">
                (Avaliações de clientes)
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              O jeito⠀<span className="font-yeux inline-block scale-[1.5]">yeux</span>⠀de se escutar música!
              Sua tela de 2.7 polegadas (6.85 cm) conta com a tecnologia E-Ink, semelhante à telas do Kindle.
              Por não ter luz azul direta, não machuca a retina. Leve e compacto, é a opção perfeita para quem
              quer largar o celular mas não consegue abrir mão da playlist!
            </p>

            <p className="text-3xl font-bold text-gray-900 mb-6">
                {produtoFamue.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </p>

            

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