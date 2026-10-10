import { Link } from "react-router-dom";
import Knu1 from "../assets/knu11.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-6xl mx-auto px-8">
        <section className="text-center py-20">
          <h2 className="text-6xl font-bold tracking-tight">Yeux.</h2>

          <p className="mt-4 text-gray-500 text-lg">
            A sua fornecedora de streetwear!
          </p>
        </section>

        {/* Cards */}
        <section className="grid md:grid-cols-3 gap-8 pb-20">

          {/* Tênis */}
          <Link
            to="/knu1"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
  <img
    src={Knu1}
    alt="Tênis Knu"
    className="w-full h-[calc(100%+30px)] object-cover object-center"
    style={{ marginTop: "0px", transform: "translateY(5px) scale(1.05)" }}
  />
</div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">tênis knu skool stacklite black white</h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-bold text-black">
                  R$ 699,90
                </span>
              </div>

              <p className="text-gray-500 mt-2">
                Conheça mais calçados.
              </p>
            </div>
          </Link>

          {/* Camisetas */}
          <Link
            to="/knu1"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
            <img
              src={Knu1}
              alt="Tênis Knu"
              className="w-full h-[calc(100%+30px)] object-cover object-center"
              style={{ marginTop: "0px", transform: "translateY(5px) scale(1.05)" }}
            />
          </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Tênis Knu</h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-gray-400 line-through text-lg">
                  R$ 399,90
                </span>

                <span className="text-xl font-bold text-black">
                  R$ 299,90
                </span>
              </div>

              <p className="text-gray-500 mt-2">
                Conheça mais calçados.
              </p>
            </div>
          </Link>

          {/* Roupas de frio */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden cursor-default">
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Roupas de frio</h3>
              <p className="text-gray-500 mt-2">
                Conheça mais roupas para frio.
              </p>
            </div>
          </div>

        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto py-6 text-center text-sm text-gray-500">
          © 2026 Yeux S.A.
        </div>
      </footer>
    </div>
  );
}