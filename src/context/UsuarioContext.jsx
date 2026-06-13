import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        setUsuarios
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}