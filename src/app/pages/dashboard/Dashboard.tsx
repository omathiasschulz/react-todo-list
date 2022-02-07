import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  const { nomeDoUsuario } = useUsuarioLogado();

  return (
    <div>
      <br></br>
      <p>Dashboard</p>

      <p>Usuário Logado: {nomeDoUsuario}</p>

      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Incrementar</button>
      <button onClick={() => console.log(counterRef.current.counter)}>Apresenta Valor</button>

      <br></br>
      <br></br>

      <Link to='/entrar'>Login</Link>
    </div>
  );
};
