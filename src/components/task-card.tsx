import React from "react";
import ButtonDeleteTask from "./button-delete-task";

interface TaskCardProps {
  id: number;
  done: boolean;
  description: string;
  handleToggleTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

const TaskCard = ({ ...props }: TaskCardProps) => {
  return (
    <div className="min-h-[4.5rem] flex items-center px-4 py-2 bg-custom-gray-500 rounded-lg">
        
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={props.done}
          onChange={() => props.handleToggleTask(props.id)}
          className="appearance-none w-[17px] h-[17px] border-2 border-[#5E60CE] rounded-full checked:bg-[#5E60CE] cursor-pointer checked:after:content-['✔'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:items-center checked:after:justify-center"
        />
      </div>

      <div className="flex-1 px-4 overflow-hidden">
        <p
          className={`text-sm leading-relaxed ${
            props.done ? "line-through text-gray-400" : "text-[#F2F2F2]"
          }`}
        >
          {props.description}
        </p>
      </div>

      <div className="flex items-center">
        <ButtonDeleteTask
          type="button"
          onClick={() => props.handleDeleteTask(props.id)}
        />
      </div>
    </div>
  );
};

export default TaskCard;
