import { Link } from "react-router-dom";
import Knu1 from "../assets/knu11.png";
import Half from "../assets/half1.png"
import Mixer from "../assets/bls1.png"
import Famue from "../assets/famue2.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-6xl mx-auto px-8">
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold tracking-tight">
            <span className="font-yeux inline-block scale-[1.7]">yeux</span>
          </h1>

          <p className="font-yeux mt-4 text-gray-500 text-lg">
            o⠀ r e a l⠀ s t r e e t w e a r .
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
              <h3 className="text-2xl font-semibold">Tênis Knu Skool Stacklite Black White</h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-bold text-black">
                  R$ 699,90
                </span>
              </div>

              {/*<p className="text-gray-500 mt-2">
                Opções de parcelamento disponíveis.
              </p>*/}
            </div>
          </Link>

          {/* Camisetas */}
          <Link
            to="/half-cab"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
            <img
              src={Half}
              alt="tênis skate half cab wafflecup una white gum"
              className="w-full h-[calc(100%+30px)] object-cover object-center"
              style={{ marginTop: "0px", transform: "translateY(-30px) scale(1.05)" }}
            />
          </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Tênis Skate Half Cab Wafflecup Una White Gum</h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-gray-400 line-through text-lg">
                  R$ 699,90
                </span>

                <span className="text-xl font-bold text-black">
                  R$ 499,90
                </span>
              </div>

              {/*<p className="text-gray-500 mt-2">
                Opções de parcelamento disponíveis.
              </p>*/}
            </div>
          </Link>

          {/* Roupas de frio */}
          <Link
            to="/tb-mixer"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
            <img
              src={Mixer}
              alt="Camiseta Manga Longa Throwback Mixer Black"
              className="w-full h-[calc(100%+30px)] object-cover object-center"
              style={{ marginTop: "0px", transform: "translateY(-20px) scale(1.0)" }}
            />
          </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Camiseta Manga Longa Throwback Mixer Black</h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-gray-400 line-through text-lg">
                  R$ 299,90
                </span>

                <span className="text-xl font-bold text-black">
                  R$ 199,90
                </span>
              </div>

              {/*<p className="text-gray-500 mt-2">
                Opções de parcelamento disponíveis.
              </p>*/}
            </div>
          </Link>

          {/* mp3 famue */}
          <Link
            to="/famue-64"
            className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
            <img
              src={Famue}
              alt="mp3 player"
              className="w-full h-[calc(100%+30px)] object-cover object-center"
              style={{ marginTop: "0px", transform: "translateY(-10px) scale(1.0)" }}
            />
          </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Famue MP3 Player 64GB 2.7 polegadas</h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-gray-400 line-through text-lg">
                  R$ 299,99
                </span>

                <span className="text-xl font-bold text-black">
                  R$ 189,90
                </span>
              </div>

              {/*<p className="text-gray-500 mt-2">
                Opções de parcelamento disponíveis.
              </p>*/}
            </div>
          </Link>

        </section>
      </main>
    </div>
  );
}