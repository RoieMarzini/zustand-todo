import { create } from 'zustand';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface TaskState {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now().toString(), title, completed: false },
      ],
    })),
  updateTask: (id, title) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      ),
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
})); 