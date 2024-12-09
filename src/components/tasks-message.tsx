import { Clipboard } from "lucide-react";
import React from "react";

const TasksMessage = () => {
  return (
    <div className="text-[#808080] flex flex-col items-center border-t border-[#333333] pt-4">
      <Clipboard size={56} className="mt-16 mb-4 text-[#808080]" />
      <div className="flex items-center flex-col">
        <p className="text-base font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-base">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
};

export default TasksMessage;
