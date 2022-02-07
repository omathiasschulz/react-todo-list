import { useCallback, useMemo, useRef, useState } from "react";
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const { nomeDoUsuario } = useUsuarioLogado();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLength = useMemo(() => {
    return email.length;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);

    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus();
    }
  }, [email, password]);

  return (
    <div>
      <br></br>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>Usuário Logado: {nomeDoUsuario}</p>
        <br></br>

        <InputLogin
          label="Email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          type="password"
          label="Senha"
          value={password}
          onChange={newValue => setPassword(newValue)}
          ref={inputPasswordRef}
        />

        <ButtonLogin type="button" onClick={handleEntrar} >
          Entrar
        </ButtonLogin>
        <ButtonLogin type="button" onClick={handleEntrar} >
          Cadastrar-se
        </ButtonLogin>
      </form>
    </div>
  );
};
