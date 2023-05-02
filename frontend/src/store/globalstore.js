import { create } from 'zustand';
import axios from 'axios';
const useStore = create((set, get) => ({
  atletas: [],
  reservas: [],
  directiva: [],
  setAtletas: async () => {
    const { data } = await axios.get(
      'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/athletes'
    );
    set((state) => ({ ...state, atletas: data.reverse() }));
  },
  setReservas: async () => {
    const { data } = await axios.get(
      'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events'
    );
    set((state) => ({ ...state, reservas: data }));
  },
  setDirectiva: async () => {
    const { data } = await axios.get(
      'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/directors'
    );
    set((state) => ({ ...state, directiva: data }));
  },
  editDirectiva: async (props) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/directors/${props.id}`,
        props
      );
      get().setDirectiva();
    } catch (error) {
      console.log(error);
    }
  },
  modifyAtletas: (data) =>
    set((state) => ({
      ...state,
      atletas: data,
    })),
}));

export default useStore;
