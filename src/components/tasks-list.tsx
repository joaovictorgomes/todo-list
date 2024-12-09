import React from "react";
import TaskCard from "./task-card";

interface TaskProps {
  id: number;
  description: string;
  done: boolean;
  handleDeleteTask: (id: number) => void;
  handleToggleTask: (id: number) => void;
}

const TasksList = (props: TaskProps) => {
  return (
    <div className="w-full min-h-[4.5rem] max-h-[37.25rem] overflow-y-auto">
      <TaskCard
        id={props.id}
        done={props.done}
        description={props.description}
        handleToggleTask={props.handleToggleTask}
        handleDeleteTask={props.handleDeleteTask}
      />
    </div>
  );
};

export default TasksList;
