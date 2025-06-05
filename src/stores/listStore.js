import axios from "axios";
import { create } from "zustand";

const useListStore = create( (set) => ({
  lists: [],
  list: null,
  actionFetchListsByUserID: async ({taskName, userId}) => {
    const res = await axios.post(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos${userId}`);
    console.log('res',res.data);
    set({lists: res.data.lists});
  }
}))

export default useListStore;