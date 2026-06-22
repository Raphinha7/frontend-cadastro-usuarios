function Biblioteca() {
  return (
    <div className="container">
      <h1>🎮 Biblioteca de Jogos</h1>

      <div className="card">
        <h2>🔥 Jogos Favoritos</h2>

        <ul>
          <li>Grand Theft Auto V</li>
          <li>EA Sports FC 26</li>
          <li>Marvel's Spider-Man 2</li>
          <li>Forza Horizon 5</li>
          <li>Call of Duty</li>
        </ul>
      </div>

      <div className="card">
        <h2>🏆 Conquistas</h2>

        <ul>
          <li>Primeiro Perfil Criado</li>
          <li>Explorador GameHub</li>
          <li>Jogador Veterano</li>
          <li>Colecionador de Jogos</li>
        </ul>
      </div>

      <div className="card">
        <h2>📊 Estatísticas</h2>

        <p>Jogos cadastrados: 5</p>
        <p>Conquistas desbloqueadas: 4</p>
        <p>Nível da conta: 15</p>
      </div>
    </div>
  );
}

export default Biblioteca;