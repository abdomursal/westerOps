export type TaskPropType = {
    id: number;
    description: string;
    featured: boolean;
    completed: boolean;
  };
  
  export type storeProps = {
    tasks: Array<TaskPropType>;
    selectedTask: Array<TaskPropType>;
    completedTasks: Array<number>;
  };
  