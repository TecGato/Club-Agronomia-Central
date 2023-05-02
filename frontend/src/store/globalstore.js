import { create } from 'zustand';
import axios from 'axios';
const useStore = create((set) => ({
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

  modifyAtletas: (data) =>
    set((state) => ({
      ...state,
      atletas: data,
    })),
}));

export default useStore;
