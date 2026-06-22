function Biblioteca() {
  const jogos = [
    {
      id: 1,
      nome: "GTA V",
      genero: "Ação",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYW2xhfJDAf7T8TIb5Aij5_1W35z2ZQ118SnWZCWL3ZRV-4bwkiJAm4-E&s=10"
    },
    {
      id: 2,
      nome: "EA FC 26",
      genero: "Esporte",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7eMA22zv9b0HR1pT1UNM4623IJJqXfrdc5nCexJH51o9i_QIeq6CjGY&s=10"
    },
    {
      id: 3,
      nome: "Spider-Man 2",
      genero: "Aventura",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtkwhB6wD-D8Hj64B3u0TRXtMkcuj7uFeoJFtf7RFi8DEz24Nq9jWng2W&s=10"
    }
  ];

  return (
    <div className="container">
      <h1>🎮 Biblioteca de Jogos</h1>

      {jogos.map((jogo) => (
        <div className="card" key={jogo.id}>
          <img
            src={jogo.imagem}
            alt={jogo.nome}
            className="game-image"
          />

          <h2>{jogo.nome}</h2>
          <p>Gênero: {jogo.genero}</p>
        </div>
      ))}
    </div>
  );
}

export default Biblioteca;