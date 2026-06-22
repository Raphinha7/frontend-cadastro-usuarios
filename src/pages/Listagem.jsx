import { useState, useEffect, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import api from "../services/api";

function Listagem() {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const [usuariosApi, setUsuariosApi] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsuariosApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function excluirJogador(id) {
    const confirmar = window.confirm(
      "Deseja realmente excluir este jogador?"
    );

    if (!confirmar) return;

    const novaLista = usuarios.filter(
      (usuario) => usuario.id !== id
    );

    setUsuarios(novaLista);

    localStorage.setItem(
      "usuarios",
      JSON.stringify(novaLista)
    );
  }

  return (
    <div className="container">
      <h1>🎮 GameHub</h1>

      <h2>👥 Jogadores Cadastrados</h2>

      {usuarios.length === 0 ? (
        <div className="card">
          <p>Nenhum jogador cadastrado.</p>
        </div>
      ) : (
        usuarios.map((usuario) => (
          <div className="card" key={usuario.id}>
            <h3>🎮 {usuario.nome}</h3>

            <p>
              <strong>Email:</strong>{" "}
              {usuario.email}
            </p>

            <p>
              <strong>Plataforma:</strong>{" "}
              {usuario.telefone}
            </p>

            <button
              onClick={() =>
                excluirJogador(usuario.id)
              }
            >
              🗑️ Excluir Jogador
            </button>
          </div>
        ))
      )}

      <h2>🌎 Comunidade GameHub</h2>

      {usuariosApi.map((usuario) => (
        <div className="card" key={usuario.id}>
          <h3>👤 {usuario.name}</h3>

          <p>
            <strong>Email:</strong>{" "}
            {usuario.email}
          </p>

          <p>
            <strong>Organização:</strong>{" "}
            {usuario.company.name}
          </p>

          <p>
            <strong>Cidade:</strong>{" "}
            {usuario.address.city}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Listagem;