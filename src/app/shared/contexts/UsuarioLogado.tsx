import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
};
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {
  const [nome, setNome] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setNome('Mathias Artur Schulz');
    }, 1000);
  });

  const handleLogout = useCallback(() => {
    console.log('Logout realizado!');
  }, []);

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout}}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
