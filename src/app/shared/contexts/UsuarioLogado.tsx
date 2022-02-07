import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
};
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Mathias Artur Schulz' }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
