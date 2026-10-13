
import { Link } from "react-router-dom";
import { produtos } from "../data/produtos";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-6xl px-8">
        <section className="py-20 text-center">
          <h1 className="text-6xl font-bold tracking-tight">
            <span className="font-yeux inline-block scale-[1.7]">
              yeux
            </span>
          </h1>

          <p className="font-yeux mt-4 text-lg text-gray-500">
            o⠀ r e a l⠀ s t r e e t w e a r .
          </p>
        </section>

        <section className="grid gap-8 pb-20 md:grid-cols-3">
          {produtos.map((produto) => (
            <Link
              to={`/${produto.id}`}
              key={produto.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 transition duration-300 hover:shadow-2xl"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={produto.imagemCard || produto.imagens[0]}
                  alt={produto.nome}
                  className="h-[calc(100%+30px)] w-full object-cover object-center"
                  style={{
                    marginTop: "0px",
                    transform: produto.imagemCardTransform || "none",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {produto.nome}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {produto.precoOriginal && (
                    <span className="text-lg text-gray-400 line-through">
                      {produto.precoOriginal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  )}

                  <span className="text-xl font-bold text-black">
                    {produto.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
