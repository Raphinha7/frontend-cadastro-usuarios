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
      alert("Selecione uma plataforma");
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

    alert("Perfil criado com sucesso!");
  }

  return (
    <div className="container">
      <h1>🎮 Cadastro de Jogador</h1>

      <p className="subtitulo-cadastro">
        Crie seu perfil e faça parte da comunidade GameHub.
      </p>

      <form onSubmit={cadastrar}>
        <div>
          <label>Gamertag</label>
          <br />
          <input
            type="text"
            placeholder="Ex: Raphinha7"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Ex: jogador@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Plataforma</label>
          <br />
          <select
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          >
            <option value="">Selecione uma plataforma</option>
            <option value="Xbox">Xbox</option>
            <option value="PlayStation">PlayStation</option>
            <option value="PC">PC</option>
            <option value="Nintendo">Nintendo</option>
          </select>
        </div>

        <br />

        <button type="submit">
          🚀 Criar Perfil
        </button>
      </form>
    </div>
  );
}

export default Cadastro;