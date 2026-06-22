import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-xbox">
      <h1 className="logo">🎮 GAMEHUB</h1>

      <h2 className="titulo-home">
        SUA COMUNIDADE GAMER
      </h2>

      <p className="subtitulo">
        Cadastre jogadores, organize perfis e acompanhe a comunidade GameHub.
      </p>

      <button
        className="btn-home"
        onClick={() => navigate("/cadastro")}
      >
        ENTRAR NO GAMEHUB
      </button>
    </div>
  );
}

export default Home;