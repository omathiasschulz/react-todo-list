import React from "react";

interface IButtonLoginProps {
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ( { children, type, onClick}) => {
    return (
        <button type={type} onClick={onClick}>
          {children}
        </button>
    );
}
