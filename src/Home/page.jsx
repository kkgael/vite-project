import { Link } from "react-router-dom";

export default function Home() {
  return (

    
    <div className="min-h-screen bg-white text-black">


      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-8">
        <section className="text-center py-20">
          <h2 className="text-6xl font-bold tracking-tight">Yeux.</h2>

          <p className="mt-4 text-gray-500 text-lg">
            A sua forneçedora de streetwear!
          </p>
        </section>

        {/* Cards */}
        <section className="grid md:grid-cols-3 gap-8 pb-20">
          {/* Sobre */}
          <Link
            to="/knu1"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Tenis</h3>
              <p className="text-gray-500 mt-2">
                Conheça mais calcados.
              </p>
            </div>
          </Link>

          {/* Contato */}
          <Link
            to="/Contato"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Camisetas</h3>
              <p className="text-gray-500 mt-2">
                Conheca mais camisas.
              </p>
            </div>
          </Link>

          {/* Sem função */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden cursor-default">
            

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Roupas de frio</h3>
              <p className="text-gray-500 mt-2">
                Conheca mais roupas para frio.
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