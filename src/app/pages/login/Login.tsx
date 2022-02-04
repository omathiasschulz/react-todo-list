import { useCallback, useMemo, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLength = useMemo(() => {
    return email.length;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <br></br>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <br></br>

        <label>
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)}></input>
        </label>

        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
