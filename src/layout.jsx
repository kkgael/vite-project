import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold tracking-widest">
            YEUX
          </h1>

          <nav className="flex gap-8 text-sm uppercase font-medium">
            <Link to="/" className="hover:text-gray-500 transition">
              Início
            </Link>

            <Link to="/Sobre" className="hover:text-gray-500 transition">
              Sobre
            </Link>

            <Link to="/Contato" className="hover:text-gray-500 transition">
              Contato
            </Link>
          </nav>

        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t mt-20">
        <div className="max-w-6xl mx-auto py-6 text-center text-gray-500 text-sm">
          © 2026 Yeux S.A.
        </div>
      </footer>
    </>
  );
}

export default Layout;