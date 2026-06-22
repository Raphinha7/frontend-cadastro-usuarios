import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">🎮 GameHub</Link>
      <Link to="/cadastro">Cadastrar Jogador</Link>
      <Link to="/listagem">Jogadores</Link>
    </nav>
  );
}

export default Navbar;