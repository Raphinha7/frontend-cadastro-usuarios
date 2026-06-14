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
      <h1>Listagem de Usuários</h1>

      <h2>Usuários Cadastrados</h2>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        usuarios.map((usuario) => (
          <div key={usuario.id}>
            <h3>{usuario.nome}</h3>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.telefone}</p>
            <hr />
          </div>
        ))
      )}

      <h2>Usuários da API</h2>

      {usuariosApi.map((usuario) => (
        <div key={usuario.id}>
          <h3>{usuario.name}</h3>
          <p>Email: {usuario.email}</p>
          <p>Empresa: {usuario.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Listagem;