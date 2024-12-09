interface HeaderTaskCardProps {
  listaDeTarefas: { done: boolean }[];
}

const HeaderTaskCard = ({ listaDeTarefas }: HeaderTaskCardProps) => {
  return (
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
  );
};

export default HeaderTaskCard;
