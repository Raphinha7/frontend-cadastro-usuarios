function Perfil() {
  return (
    <div className="container">
      <h1>👤 Perfil Gamer</h1>

      <div className="card">
        <h2>Informações</h2>

        <p>Gamertag: Raphinha7</p>
        <p>Plataforma: Playstation</p>
        <p>Nível: 25</p>
      </div>

      <div className="card">
        <h2>🏆 Conquistas</h2>

        <ul>
          <li>Primeiro Login</li>
          <li>Jogador Veterano</li>
          <li>Colecionador de Jogos</li>
        </ul>
      </div>
    </div>
  );
}

export default Perfil;