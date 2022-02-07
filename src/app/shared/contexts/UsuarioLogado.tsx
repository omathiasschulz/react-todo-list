import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
};
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {
  const handleLogout = useCallback(() => {
    console.log('Logout realizado!');
  }, []);

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Mathias Artur Schulz', logout: handleLogout}}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
