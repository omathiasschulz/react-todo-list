import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  const [lista, setLista] = useState<string[]>(['Todo 01', 'Todo 02', 'Todo 03']);

  const handleInputKeyDown:React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    const value = e.currentTarget.value.trim();
    if (e.key !== 'Enter' || value.length === 0) return;

    e.currentTarget.value = '';
    setLista((oldLista) => {
      if (oldLista.includes(value)) return oldLista;
      return [...oldLista, value]
    });
  }, []);

  return (
    <div>
      <br></br>
      <p>Dashboard</p>

      <p>Usuário Logado: {nomeDoUsuario}</p>

      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Incrementar</button>
      <button onClick={() => console.log(counterRef.current.counter)}>Apresenta Valor</button>
      <button onClick={logout}>Logout</button>

      <br></br>
      <br></br>

      <Link to='/entrar'>Login</Link>

      <br></br>
      <br></br>

      <h3>Todo List</h3>

      <input onKeyDown={handleInputKeyDown} />

      <br></br>
      <br></br>

      <ul>
        {lista.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};
