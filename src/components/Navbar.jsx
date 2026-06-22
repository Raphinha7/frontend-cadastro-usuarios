import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav>
      <Link to="/">🎮 GameHub</Link>
      <Link to="/cadastro">Cadastrar Jogador</Link>
      <Link to="/listagem">Jogadores</Link>
      <Link to="/biblioteca">Biblioteca</Link>    
    </nav>
  );
}

export default Navbar;