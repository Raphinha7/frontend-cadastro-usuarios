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
      alert("Gamertag obrigatória");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    if (!telefone.trim()) {
      alert("Plataforma obrigatória");
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

    alert("Jogador cadastrado com sucesso!");
  }

  return (
    <div className="container">
      <h1>🎮 Cadastro de Jogadores</h1>

      <form onSubmit={cadastrar}>
        <div>
          <label>Gamertag:</label>
          <br />
          <input
            type="text"
            placeholder="Digite sua gamertag"
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
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Plataforma:</label>
          <br />
          <input
            type="text"
            placeholder="Xbox, PlayStation ou PC"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Cadastrar Jogador
        </button>
      </form>
    </div>
  );
}

export default Cadastro;