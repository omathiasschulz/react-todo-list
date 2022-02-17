import { Api } from "../ApiConfig"
import { ApiException } from "../ApiException";

export interface ITarefa {
  id: number;
  title: string;
  isDone: boolean;
}

const get = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().get('/tarefas');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Falha ao consultar tarefas!');
  }
}

const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || `Falha ao consultar tarefa com ID ${id}!`);
  }
}

const post = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().post('/tarefas', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Falha ao cadastrar registro!');
  }
}

const updateById = async (id: string, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || `Falha ao atualizar tarefa com ID ${id}!`);
  }
}

const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/tarefas/${id}`);
  } catch (error: any) {
    return new ApiException(error.message || `Falha ao deletar tarefa com ID ${id}!`);
  }
}

export const TarefasService = {
  get,
  getById,
  post,
  updateById,
  deleteById,
};
