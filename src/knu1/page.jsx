import { useState } from "react";
import Knu1 from "../assets/knu11.png";
import Knu2 from "../assets/knu12.png";

export default function Knu() {
  const [imagemAtual, setImagemAtual] = useState(0);

  const imagens = [Knu1, Knu2];

  function anterior() {
    setImagemAtual((atual) =>
      atual === 0 ? imagens.length - 1 : atual - 1
    );
  }

  function proxima() {
    setImagemAtual((atual) =>
      atual === imagens.length - 1 ? 0 : atual + 1
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

          {/* Carrossel de imagens */}
          <div className="bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="relative w-full max-w-md">

              <img
                src={imagens[imagemAtual]}
                alt={`Tênis Knu - imagem ${imagemAtual + 1}`}
                className="w-full aspect-square object-contain"
              />

              {/* Botão anterior */}
              <button
                onClick={anterior}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"
              >
                &#8249;
              </button>

              {/* Botão próxima */}
              <button
                onClick={proxima}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"
              >
                &#8250;
              </button>
            </div>

            {/* Indicadores do carrossel */}
            <div className="flex gap-3 mt-4">
              {imagens.map((imagem, index) => (
                <button
                  key={imagem}
                  onClick={() => setImagemAtual(index)}
                  aria-label={`Ver imagem ${index + 1}`}
                  aria-current={imagemAtual === index ? "true" : undefined}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    imagemAtual === index
                      ? "bg-black"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3">
              {imagemAtual + 1} / {imagens.length}
            </p>
          </div>

          {/* Informações do produto */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Coleção Casual
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Tênis Knu
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-sm text-gray-500">
                (128 avaliações)
              </span>
            </div>

            <p className="text-gray-600 leading-7 mt-6">
              Um tênis moderno que combina estilo, conforto e
              personalidade. Ideal para o dia a dia, passeios e
              composições urbanas. Seu design versátil combina
              com diferentes estilos e ocasiões.
            </p>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Preço</p>

              <div className="flex items-center gap-3 mt-1">
                <span className="text-3xl font-bold text-gray-900">
                  R$ 699,90
                </span>

                {/*<span className="text-sm text-gray-400 line-through">
                  ou 6x de R$116,66 s/juros
                </span>
                </div>*/}

              <p className="text-sm text-green-600 mt-2">
                Em até 6x sem juros
              </p>
            </div>

            {/* Seleção de tamanho */}
            <div className="mt-7">
              <h2 className="font-semibold text-gray-800 mb-3">
                Selecione o tamanho:
              </h2>

              <div className="flex flex-wrap gap-3">
                {[38, 39, 40, 41, 42, 43].map((tamanho) => (
                  <button
                    key={tamanho}
                    className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-colors"
                  >
                    {tamanho}
                  </button>
                ))}
              </div>
            </div>

            {/* Botões de compra */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Comprar agora
              </button>

              <button className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Adicionar ao carrinho
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-5">
              🚚 Entrega para todo o Brasil
            </p>

            <p className="text-sm text-gray-500 mt-2">
              🔒 Compra segura e pagamento protegido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}