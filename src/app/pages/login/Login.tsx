import { useCallback, useMemo, useRef, useState } from "react";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

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
        <br></br>

        <label>
          <span>Email</span>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
          ></input>
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            ref={inputPasswordRef}
          ></input>
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
