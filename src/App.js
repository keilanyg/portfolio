import React from "react";
import SobreMim from "./components/sobremim/index";
import Qualificacoes from "./components/qualificacoes/index";
import Servicos from "./components/servicos/index";
import { Rodape } from "./components/rodape/index";
import Sidebar from "./components/barradenavegacao/index.jsx";
import { Ferramentas } from "./components/Camposdapag/cardferramentas/index.jsx";
import Portfolio from "./components/Camposdapag/cardportfolio/index.jsx";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <div className="flex-col items-center text-center bg-[#FFFFFF]">
          <SobreMim />
          <Qualificacoes />
          <Portfolio />
          <Ferramentas />
          <Servicos />
          <Rodape />
        </div>
      </main>
    </div>
  );
}

export default App;