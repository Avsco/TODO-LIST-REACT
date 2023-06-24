import { create } from 'zustand'

export const useStoreTodo = create((set) => ({
todos: [
        {
          text: 'Learn about React',
          priority: 1,
          isCompleted: false,
        },
        {
          text: 'Lear about Vue',
          priority: 2,
          isCompleted: false,
        },
    ],
  createTodo: (data) => set((state) => ({ todos: [...state.todos, { ...data, isCompleted: false }] })),
  completeTodo: (todoText) => {
    set((state) =>({ 
        todos: state.todos.map(({ text, isCompleted }) => {
            if (todoText === text) return { text, isCompleted: !isCompleted };
            return { text, isCompleted };
        })})
    );
  }
}))
