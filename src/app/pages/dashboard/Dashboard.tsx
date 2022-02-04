import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  return (
    <div>
      <br></br>
      <p>Dashboard</p>

      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Incrementar</button>
      <button onClick={() => console.log(counterRef.current.counter)}>Apresenta Valor</button>

      <br></br>
      <br></br>

      <Link to='/entrar'>Login</Link>
    </div>
  );
};
