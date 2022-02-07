import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

interface IListItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  const [lista, setLista] = useState<IListItem[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    const value = e.currentTarget.value.trim();
    if (e.key !== 'Enter' || value.length === 0) return;

    e.currentTarget.value = '';
    setLista((oldLista) => {
      if (oldLista.some((listItem) => listItem.title === value)) return oldLista;

      return [
        ...oldLista,
        { title: value, isSelected: false },
      ];
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
      <p>Itens Selecionados: {lista.filter(listItem => listItem.isSelected).length}</p>

      <ul>
        {/* monta a lista de itens de acordo com array */}
        {lista.map((listItem) => {
          return <li key={listItem.title}>
            <input
              type="checkbox"
              checked={listItem.isSelected}
              onChange={() => {
                setLista(oldLista => {
                  return oldLista.map(oldListItem => {
                    const newIsSelected = oldListItem.title === listItem.title
                      ? !oldListItem.isSelected
                      : oldListItem.isSelected;
                    return {
                      ...oldListItem,
                      isSelected: newIsSelected,
                    }
                  });
                })
              }}
            />
            {listItem.title}
          </li>;
        })}
      </ul>
    </div>
  );
};
