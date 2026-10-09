import { Link } from "react-router-dom";
import { House, Info, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-5">
      <div className="flex justify-center gap-8">
        <Link to="/" className="text-white hover:text-blue-400 transition">
          <House size={28} />
        </Link>

        <Link to="/sobre" className="text-white hover:text-blue-400 transition">
          <Info size={28} />
        </Link>

        <Link to="/contato" className="text-white hover:text-blue-400 transition">
          <Mail size={28} />
        </Link>
      </div>

      <p className="text-center text-sm text-gray-400 mt-3">
        TCC
      </p>
    </footer>
  );
}