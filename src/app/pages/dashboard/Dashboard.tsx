import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';
import { ApiException } from '../../shared/services/api/ApiException';
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  const [lista, setLista] = useState<ITarefa[]>([]);

  // lista todas as tarefas consultando no server
  useEffect(() => {
    TarefasService.get()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
          return;
        }
        setLista(result);
      });
  }, [])

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    const value = e.currentTarget.value.trim();
    if (e.key !== 'Enter' || value.length === 0) return;

    e.currentTarget.value = '';

    if (lista.some((listItem) => listItem.title === value)) return;

    // realiza o cadastro de uma nova tarefa e atualiza a lista na tela com a nova tarefa
    TarefasService.post({ title: value, isDone: false })
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
          return;
        }

        setLista((oldLista) => {
          return [...oldLista, result];
        });
      });
  }, [lista]);

  const handleToggleComplete = useCallback((id: number) => {
    const tarefaToUpdate = lista.find(tarefa => tarefa.id === id);
    if (!tarefaToUpdate) return;

    TarefasService.updateById(id, {
      ...tarefaToUpdate,
      isDone: !tarefaToUpdate.isDone,
    }).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
        return;
      }

      setLista(oldLista => {
        return oldLista.map(oldListItem => {
          if (oldListItem.id === id) return result;
          return oldListItem;
        });
      });
    });
  }, [lista]);

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
      <p>Itens Selecionados: {lista.filter(listItem => listItem.isDone).length}</p>

      <ul>
        {/* monta a lista de itens de acordo com array */}
        {lista.map((listItem) => {
          return <li key={listItem.id}>
            <input
              type="checkbox"
              checked={listItem.isDone}
              onChange={() => handleToggleComplete(listItem.id)}
            />
            {listItem.title}
          </li>;
        })}
      </ul>
    </div>
  );
};
