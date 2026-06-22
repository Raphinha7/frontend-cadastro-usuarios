import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

function Home() {
  const { usuarios } = useContext(UsuarioContext);

  return (
    <div className="container">
      <h1>🎮 GameHub</h1>

      <h2>Plataforma de Gerenciamento de Jogadores</h2>

      <p>
        Sistema inspirado em plataformas como Xbox Live e PlayStation Network.
      </p>

      <div className="card">
        <h3>Total de Jogadores Cadastrados</h3>
        <p>{usuarios.length}</p>
      </div>

      <div className="card">
        <h3>Funcionalidades</h3>

        <ul>
          <li>Cadastro de jogadores</li>
          <li>Validação de formulário</li>
          <li>Listagem dinâmica</li>
          <li>Context API</li>
          <li>Integração com API REST</li>
          <li>Persistência com localStorage</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;