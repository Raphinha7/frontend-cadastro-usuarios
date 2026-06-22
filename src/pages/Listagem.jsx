import { useState, useEffect, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import api from "../services/api";

function Listagem() {
  const { usuarios } = useContext(UsuarioContext);

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

  return (
    <div className="container">
      <h1>🎮 GameHub</h1>

      <h2>Jogadores Cadastrados</h2>

      {usuarios.length === 0 ? (
        <p>Nenhum jogador cadastrado.</p>
      ) : (
        usuarios.map((usuario) => (
          <div className="card" key={usuario.id}>
            <h3>{usuario.nome}</h3>
            <p>Email: {usuario.email}</p>
            <p>Plataforma: {usuario.telefone}</p>
            <hr />
          </div>
        ))
      )}

      <h2>🌎 Comunidade GameHub</h2>

      {usuariosApi.map((usuario) => (
        <div className="card" key={usuario.id}>
          <h3>{usuario.name}</h3>
          <p>Email: {usuario.email}</p>
          <p>Organização: {usuario.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Listagem;