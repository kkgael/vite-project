
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";

function FinalizarCompra() {
  const { itens, valorTotal, limparCarrinho } = useCarrinho();

  const [pagamento, setPagamento] = useState("pix");
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const [endereco, setEndereco] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const formatarPreco = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const frete = itens.length > 0 ? 0 : 0;
  const total = valorTotal + frete;

  function atualizarEndereco(event) {
    const { name, value } = event.target;

    setEndereco((atual) => ({
      ...atual,
      [name]: value,
    }));
  }

  function finalizarCompra(event) {
    event.preventDefault();

    if (itens.length === 0) return;

    limparCarrinho();
    setCompraFinalizada(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (compraFinalizada) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="mb-6 text-7xl">🎉</div>

        <h1 className="text-3xl font-bold">
          Parabéns! Compra realizada!
        </h1>

        <p className="mt-4 text-gray-600">
          Seu pedido foi confirmado com sucesso.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Esta é uma compra demonstrativa. Nenhum pagamento foi realizado.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-black px-8 py-4
          font-semibold text-white transition hover:bg-gray-800"
        >
          Voltar para a loja
        </Link>
      </section>
    );
  }

  if (itens.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">
          Seu carrinho está vazio
        </h1>

        <p className="mt-4 text-gray-500">
          Adicione algum produto antes de finalizar a compra.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-black px-8 py-4
          font-semibold text-white hover:bg-gray-800"
        >
          Continuar comprando
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-3 text-3xl font-bold">
        Finalizar compra
      </h1>

      <p className="mb-10 text-sm text-gray-500">
        Preencha seus dados para concluir o pedido demonstrativo.
      </p>

      <form
        onSubmit={finalizarCompra}
        className="grid grid-cols-1 gap-10 lg:grid-cols-3"
      >
        {/* DADOS DO CLIENTE */}
        <div className="space-y-8 lg:col-span-2">
          <section className="rounded-2xl border p-6">
            <h2 className="mb-6 text-xl font-bold">
              1. Dados pessoais
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">
                  Nome completo
                </span>
                <input
                  name="nome"
                  value={endereco.nome}
                  onChange={atualizarEndereco}
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  E-mail
                </span>
                <input
                  type="email"
                  name="email"
                  value={endereco.email}
                  onChange={atualizarEndereco}
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  Telefone
                </span>
                <input
                  type="tel"
                  name="telefone"
                  value={endereco.telefone}
                  onChange={atualizarEndereco}
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>
            </div>
          </section>

          {/* ENDEREÇO */}
          <section className="rounded-2xl border p-6">
            <h2 className="mb-6 text-xl font-bold">
              2. Endereço de entrega
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-medium">
                  CEP
                </span>
                <input
                  name="cep"
                  value={endereco.cep}
                  onChange={atualizarEndereco}
                  required
                  placeholder="00000-000"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">
                  Rua ou avenida
                </span>
                <input
                  name="rua"
                  value={endereco.rua}
                  onChange={atualizarEndereco}
                  required
                  placeholder="Nome da rua"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  Número
                </span>
                <input
                  name="numero"
                  value={endereco.numero}
                  onChange={atualizarEndereco}
                  required
                  placeholder="Número"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  Complemento (opcional)
                </span>
                <input
                  name="complemento"
                  value={endereco.complemento}
                  onChange={atualizarEndereco}
                  placeholder="Apartamento, bloco..."
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  Bairro
                </span>
                <input
                  name="bairro"
                  value={endereco.bairro}
                  onChange={atualizarEndereco}
                  required
                  placeholder="Seu bairro"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  Cidade
                </span>
                <input
                  name="cidade"
                  value={endereco.cidade}
                  onChange={atualizarEndereco}
                  required
                  placeholder="Sua cidade"
                  className="w-full rounded-lg border p-3 outline-none
                  focus:border-black"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-medium">
                  Estado
                </span>
                <input
                  name="estado"
                  value={endereco.estado}
                  onChange={atualizarEndereco}
                  required
                  placeholder="UF"
                  maxLength={2}
                  className="w-full rounded-lg border p-3 uppercase
                  outline-none focus:border-black"
                />
              </label>
            </div>
          </section>

          {/* PAGAMENTO */}
          <section className="rounded-2xl border p-6">
            <h2 className="mb-6 text-xl font-bold">
              3. Forma de pagamento
            </h2>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label
                className={`cursor-pointer rounded-xl border p-4 ${
                  pagamento === "pix"
                    ? "border-black bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="pagamento"
                  value="pix"
                  checked={pagamento === "pix"}
                  onChange={() => setPagamento("pix")}
                  className="mr-2"
                />
                <span className="font-semibold">Pix</span>
                <p className="mt-2 text-sm text-gray-500">
                  Pagamento simulado
                </p>
              </label>

              <label
                className={`cursor-pointer rounded-xl border p-4 ${
                  pagamento === "cartao"
                    ? "border-black bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="pagamento"
                  value="cartao"
                  checked={pagamento === "cartao"}
                  onChange={() => setPagamento("cartao")}
                  className="mr-2"
                />
                <span className="font-semibold">Cartão</span>
                <p className="mt-2 text-sm text-gray-500">
                  Crédito ou débito fictício
                </p>
              </label>
            </div>

            {pagamento === "pix" ? (
              <div className="rounded-xl bg-gray-50 p-5">
                <p className="font-semibold">Pix demonstrativo</p>
                <p className="mt-2 text-sm text-gray-600">
                  Ao confirmar, o pedido será aprovado automaticamente.
                  Nenhum QR Code ou transferência será realizado.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium">
                    Nome impresso no cartão
                  </span>
                  <input
                    required
                    autoComplete="off"
                    placeholder="NOME FICTÍCIO"
                    className="w-full rounded-lg border p-3
                    outline-none focus:border-black"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium">
                    Número fictício do cartão
                  </span>
                  <input
                    required
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    className="w-full rounded-lg border p-3
                    outline-none focus:border-black"
                  />
                </label>

                <label>
                  <span className="mb-2 block text-sm font-medium">
                    Validade fictícia
                  </span>
                  <input
                    required
                    autoComplete="off"
                    placeholder="MM/AA"
                    maxLength={5}
                    className="w-full rounded-lg border p-3
                    outline-none focus:border-black"
                  />
                </label>

                <label>
                  <span className="mb-2 block text-sm font-medium">
                    CVV fictício
                  </span>
                  <input
                    required
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="000"
                    maxLength={4}
                    className="w-full rounded-lg border p-3
                    outline-none focus:border-black"
                  />
                </label>

                <p className="text-sm text-gray-500 sm:col-span-2">
                  Use somente dados inventados. O site não processa
                  pagamentos nem valida cartões.
                </p>
              </div>
            )}
          </section>
        </div>

        {/* RESUMO DO PEDIDO */}
        <aside className="h-fit rounded-2xl border p-6 lg:sticky lg:top-6">
          <h2 className="mb-6 text-xl font-bold">
            Resumo do pedido
          </h2>

          <div className="space-y-5">
            {itens.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 border-b pb-4"
              >
                <div>
                  <p className="font-semibold">{item.nome}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Quantidade: {item.quantidade}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {formatarPreco(item.preco)} por unidade
                  </p>
                </div>

                <p className="whitespace-nowrap font-semibold">
                  {formatarPreco(item.preco * item.quantidade)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>{formatarPreco(valorTotal)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Frete</span>
              <span>Grátis</span>
            </div>
          </div>

          <div className="mt-5 flex justify-between border-t pt-5 text-lg">
            <strong>Total</strong>
            <strong>{formatarPreco(total)}</strong>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-black py-4
            font-semibold text-white transition hover:bg-gray-800"
          >
            Confirmar compra
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            Compra demonstrativa. Nenhuma cobrança será feita.
          </p>

          <Link
            to="/"
            className="mt-4 block text-center text-sm underline"
          >
            Continuar comprando
          </Link>
        </aside>
      </form>
    </section>
  );
}

export default FinalizarCompra;
