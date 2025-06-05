import { create } from "zustand";
import { persist } from "zustand/middleware";

const BASE_URL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com";

const useToDoStore = create(
  persist(
    (set) => ({
      todos: [],
      actionFetchToDos: async () => {
        try {
          const res = await fetch(`${BASE_URL}/api/V1/todos/1`)
          const data = await res.json();
          console.log('alpha===', data)
          
          set({ todos: data.todos })
        } catch (error) {
          console.log('error===', error)
    }
      }
    }),
    {
      name: "todo"
    }
  )
)

export default useToDoStore;