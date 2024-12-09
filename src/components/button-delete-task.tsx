import { Trash2 } from "lucide-react";
import React from "react";

interface ButtonDeleteTaskProps {
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
}

const ButtonDeleteTask = ({ onClick, type }: ButtonDeleteTaskProps) => {
  return (
    <button type={type} onClick={onClick}>
      <Trash2
        size={16}
        className="text-[#808080] cursor-pointer hover:text-[#E25858]"
      />
    </button>
  );
};

export default ButtonDeleteTask;
