import { Trash2 } from "lucide-react";
import React from "react";

interface TaskProps {
  id: number;
  description: string;
  done: boolean;
  handleDeleteTask: (id: number) => void;
  handleToggleTask: (id: number) => void;
}

const TasksList = (props: TaskProps) => {
  return (
    <div className="w-full min-h-[4.5rem] max-h-[37.25rem] overflow-y-auto flex items-center justify-between px-4 py-2 bg-custom-gray-500 rounded-lg">
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
        <button type="button" onClick={() => props.handleDeleteTask(props.id)}>
          <Trash2
            size={16}
            className="text-[#808080] cursor-pointer hover:text-[#E25858]"
          />
        </button>
      </div>
    </div>
  );
};

export default TasksList;
