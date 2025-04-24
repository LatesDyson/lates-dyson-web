import React from "react";

export default function LatesDysonHome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wide text-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          LATES DYSON
        </h1>
        <ul className="flex space-x-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Inicio</li>
          <li className="hover:text-white cursor-pointer">Sobre la banda</li>
          <li className="hover:text-white cursor-pointer">Música</li>
          <li className="hover:text-white cursor-pointer">Conciertos</li>
          <li className="hover:text-white cursor-pointer">Contacto</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-purple-800 to-black">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Sonido real. <br /> Energía pura.
        </h2>
        <p className="max-w-xl text-lg text-gray-300 mb-8">
          Rock alternativo desde Ñuble. Letras introspectivas, energía auténtica y una experiencia en vivo que no se olvida.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Escucha ahora
        </button>
      </section>

      {/* Próximamente */}
      <section className="py-20 px-6 text-center bg-black">
        <h3 className="text-2xl font-bold mb-4">Próximamente</h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Lanzamiento del primer álbum, gira 2025, y nuevo merchandising oficial. ¡Mantente atento a las novedades!
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 border-t border-gray-700 bg-black text-gray-400">
        <p>&copy; {new Date().getFullYear()} Lates Dyson. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
