import React from "react";
import SobreMim from "./components/sobremim/index";
import Qualificacoes from "./components/qualificacoes/index";
import Servicos from "./components/servicos/index";
import { Rodape } from "./components/rodape/index";
import Sidebar from "./components/barradenavegacao/index.jsx";
import  {Ferramentas} from "./components/Camposdapag/cardferramentas/index.jsx";
import Portfolio from "./components/Camposdapag/cardportfolio/index.jsx";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-20 md:ml-56 pt-10">
        <SobreMim />
        <Qualificacoes />
        <Portfolio/>
        <Ferramentas/>
        <Servicos />
        <Rodape />
      </main>
    </div>
  );
}

export default App;
