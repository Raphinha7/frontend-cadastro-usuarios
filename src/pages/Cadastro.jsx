import { useState, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

function Cadastro() {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Nome obrigatório");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    if (!telefone.trim()) {
      alert("Telefone obrigatório");
      return;
    }

    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      telefone,
    };

    const novosUsuarios = [...usuarios, novoUsuario];

    setUsuarios(novosUsuarios);

    localStorage.setItem(
      "usuarios",
      JSON.stringify(novosUsuarios)
    );

    setNome("");
    setEmail("");
    setTelefone("");

    alert("Usuário cadastrado com sucesso!");
  }

  return (
    <div className="container">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={cadastrar}>
        <div>
          <label>Nome:</label>
          <br />
          <input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Telefone:</label>
          <br />
          <input
            type="text"
            placeholder="Digite o telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;