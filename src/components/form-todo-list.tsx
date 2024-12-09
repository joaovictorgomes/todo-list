"use client";

import { CirclePlus } from "lucide-react";
import { useState } from "react";
import TasksList from "./tasks-list";
import TasksMessage from "./tasks-message";

type Task = {
  id: number;
  description: string;
  done: boolean;
};

const FormTodoList = () => {
  const [listaDeTarefas, setListaDeTarefas] = useState<Task[]>([]);
  const [novaDescricaoDaTarefa, setNovaDescricaoDaTarefa] = useState("");

  const handleNovaDescricaoDaTarefaChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNovaDescricaoDaTarefa(e.target.value);
  };

  const handleCriarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cria a nova tarefa
    const novaTarefa = {
      id: Date.now(),
      description: novaDescricaoDaTarefa,
      done: false,
    };

    // Atualiza o estado com a nova tarefa
    setListaDeTarefas((tarefasAntigas) => [...tarefasAntigas, novaTarefa]);

    // Limpa o campo de entrada
    setNovaDescricaoDaTarefa("");
  };

  const handleDeletarTarefa = (id: number) => {
    setListaDeTarefas((tarefasAntigas) =>
      tarefasAntigas.filter((tarefa) => tarefa.id !== id)
    );
  };

  const handleAlternarStatusTarefa = (id: number) => {
    setListaDeTarefas((tarefasAntigas) =>
      tarefasAntigas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, done: !tarefa.done } : tarefa
      )
    );
  };

  return (
    <div className="w-[46rem]">
      <form onSubmit={handleCriarTarefa}>
        <div className="flex gap-2 items-center">
          {/* Input de texto */}
          <input
            name="novaTarefa"
            value={novaDescricaoDaTarefa}
            onChange={handleNovaDescricaoDaTarefaChange}
            type="text"
            placeholder="Adicione uma tarefa"
            className="w-[39.87rem] h-14 bg-custom-gray-500 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5E60CE]"
          />

          {/* Botão de envio */}
          <button
            type="submit"
            className="flex h-14 items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={novaDescricaoDaTarefa.trim().length === 0}
          >
            <span>Criar</span>
            <CirclePlus size={16} />
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-6 mt-16">
        {/* Contagem de tarefas */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="text-[#4EA8DE] text-sm">Tarefas criadas</p>
            <span className="bg-[#333333] flex items-center rounded-full px-2 text-xs">
              {listaDeTarefas.length}
            </span>
          </div>
          <div className="flex gap-2">
            <p className="text-[#8284FA] text-sm">Concluídas</p>
            <span className="bg-[#333333] flex items-center rounded-full px-2 text-xs">
              {listaDeTarefas.filter((tarefa) => tarefa.done).length} de{" "}
              {listaDeTarefas.length}
            </span>
          </div>
        </div>

        {/* Lista de tarefas */}

        {listaDeTarefas.length === 0 && <TasksMessage />}

        <div className="w-[46.75rem] custom-scroll overflow-y-auto max-h-[550px] flex flex-col gap-6 pr-4">
          {listaDeTarefas.map((item) => (
            <TasksList
              key={item.id}
              id={item.id}
              description={item.description}
              done={item.done}
              handleDeleteTask={handleDeletarTarefa}
              handleToggleTask={handleAlternarStatusTarefa}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormTodoList;
