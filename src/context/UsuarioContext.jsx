import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem("usuarios");

    if (dados) {
      setUsuarios(JSON.parse(dados));
    }
  }, []);

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        setUsuarios,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}