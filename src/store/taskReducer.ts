import { createSlice } from "@reduxjs/toolkit";
import { storeProps } from "../types/StorePropType";
import { isCompleted, isFindId } from "../utils/arrayUtil";


export const initialState: storeProps = {
  tasks: [],
  selectedTask: [],
  completedTasks: [],
};
export const TaskSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addTask: (state, action) => {
        if (isFindId(state.tasks,action.payload.id)) {
        return {
          ...state,
          tasks: [
            ...state.tasks.filter((task) => task.id !== action.payload.id),
            action.payload
          ],
        };
      }
      return { ...state, tasks: [...state.tasks, action.payload] };
    },
    updateTask: (state, action) => {
       if (isFindId(state.tasks,action.payload.id)) {
        return {
          ...state,
          tasks: [
            ...state.tasks.filter((task) => task.id !== action.payload.id),
            action.payload
          ],
        };
      }
    },
    deleteTask: (state, action) => {
      if (isFindId(state.tasks,action.payload.id)) {
        return {
          ...state,
          tasks: [
            ...state.tasks.filter((task) => task.id !== action.payload.id),
          ],
          completedTasks: [
            ...state.completedTasks.filter((id) => id !== action.payload.id),
          ],
        };
      }
    },
    completeTask: (state, action) => {
      if (isCompleted(state.completedTasks,action.payload)) {
        return {
          ...state,
          completedTasks: [
            ...state.completedTasks.filter((id) => id !== action.payload),
          ],
        };
      }
      return {
        ...state,
        completedTasks: [...state.completedTasks, action.payload],
      };
    },
  },
});

export const { addTask, updateTask, deleteTask, completeTask } =
  TaskSlice.actions;

export default TaskSlice.reducer;
