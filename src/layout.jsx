
import { Link, useNavigate } from "react-router-dom";
import { useCarrinho } from "./context/CarrinhoContext";

function Layout({ children }) {
  const navigate = useNavigate();

  const {
    quantidadeTotal,
    valorTotal,
    itens,
    setMiniCarrinhoAberto,
    miniCarrinhoAberto,
    removerProduto,
    excluirProduto,
    adicionarProduto,
  } = useCarrinho();

  return (
    <>
      {/* CABEÇALHO */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <Link to="/" className="text-2xl font-bold tracking-normal">
            <span className="font-yeux inline-block scale-[2.5] tracking-normal">
              yeux
            </span>
          </Link>

          <nav className="flex items-center gap-8 text-sm font-medium uppercase">
            <Link to="/" className="transition hover:text-gray-500">
              <span className="font-vans">Início</span>
            </Link>

            <Link to="/about" className="transition hover:text-gray-500">
              <span className="font-vans">Sobre</span>
            </Link>

            <Link to="/Contato" className="transition hover:text-gray-500">
              <span className="font-vans">Contato</span>
            </Link>

            {/* BOTÃO DO CARRINHO */}
            <button
              type="button"
              onClick={() => setMiniCarrinhoAberto(true)}
              aria-label={`Abrir carrinho com ${quantidadeTotal} itens`}
              className="relative inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              {quantidadeTotal > 0 && (
                <span
                  className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white"
                >
                  {quantidadeTotal > 99 ? "99+" : quantidadeTotal}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* CARRINHO LATERAL GLOBAL */}
      {miniCarrinhoAberto && (
        <>
          {/* FUNDO ESCURECIDO */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMiniCarrinhoAberto(false)}
          />

          {/* PAINEL LATERAL */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mini carrinho"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* CABEÇALHO DO PAINEL */}
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <h2 className="text-xl font-bold">Seu carrinho</h2>

                <p className="mt-1 text-sm text-gray-500">
                  {quantidadeTotal}{" "}
                  {quantidadeTotal === 1 ? "item" : "itens"} no carrinho
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMiniCarrinhoAberto(false)}
                aria-label="Fechar carrinho"
                className="flex h-9 w-9 items-center justify-center rounded-full text-2xl hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            {/* LISTA DE PRODUTOS */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {itens.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-gray-500">
                    Seu carrinho está vazio.
                  </p>

                  <button
                    type="button"
                    onClick={() => setMiniCarrinhoAberto(false)}
                    className="mt-4 text-sm font-semibold underline"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {itens.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between gap-4 border-b pb-5"
                    >
                      <div className="min-w-0">
                        <h3 className="font-semibold">{item.nome}</h3>

                        <p className="mt-2 text-sm text-gray-500">
                          Quantidade: {item.quantidade}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {item.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          por unidade
                        </p>

                        {/* CONTROLES DE QUANTIDADE */}
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => removerProduto(item.id)}
                            className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
                            aria-label={`Diminuir quantidade de ${item.nome}`}
                          >
                            −
                          </button>

                          <span className="text-sm">
                            {item.quantidade}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              adicionarProduto({
                                id: item.id,
                                nome: item.nome,
                                preco: item.preco,
                              })
                            }
                            className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
                            aria-label={`Aumentar quantidade de ${item.nome}`}
                          >
                            +
                          </button>

                          <button
                            type="button"
                            onClick={() => excluirProduto(item.id)}
                            className="text-sm text-red-600 hover:underline"
                          >
                            Remover
                          </button>
                        </div>
                      </div>

                      <p className="whitespace-nowrap font-semibold">
                        {(item.preco * item.quantidade).toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RODAPÉ DO PAINEL */}
            <div className="border-t px-6 py-5">
              <div className="mb-5 flex justify-between text-lg">
                <span className="text-gray-600">Subtotal</span>

                <strong>
                  {valorTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMiniCarrinhoAberto(false);
                  navigate("/checkout");
                }}
                disabled={itens.length === 0}
                className="w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Finalizar compra
              </button>

              <button
                type="button"
                onClick={() => setMiniCarrinhoAberto(false)}
                className="mt-3 w-full rounded-xl border border-black py-3 font-semibold transition hover:bg-gray-100"
              >
                Continuar comprando
              </button>
            </div>
          </aside>
        </>
      )}

      {/* CONTEÚDO DA PÁGINA */}
      <main>{children}</main>

      {/* RODAPÉ DO SITE */}
      <footer className="mt-20 border-t">
        <div className="mx-auto max-w-6xl py-6 text-center text-sm text-gray-500">
          © 2026⠀
          <span className="font-yeux inline-block scale-[1.7]">
            yeux
          </span>
          ⁣⁣⁣⁣⁣⁣ ⠀S.A.
        </div>
      </footer>
    </>
  );
}

export default Layout;
