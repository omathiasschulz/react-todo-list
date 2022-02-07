import React, { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface IButtonLoginProps {
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ( { children, type, onClick}) => {
    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

    return (
        <button type={type} onClick={onClick}>
          {nomeDoUsuario}, {children}
        </button>
    );
}
