import { create } from 'zustand';
import axios from 'axios';
const useStore = create((set, get) => ({
  atletas: [],
  reservas: [],
  directiva: [],
  dates: [],

  setAtletas: async () => {
    const { data } = await axios.get(
      'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/athletes'
    );
    set((state) => ({ ...state, atletas: data }));
  },
  setReservas: async () => {
    try {
      const { data } = await axios.get(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events'
      );
      set((state) => ({ ...state, reservas: data }));
    } catch (error) {}
  },
  setDirectiva: async () => {
    const { data } = await axios.get(
      'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/directors'
    );
    set((state) => ({ ...state, directiva: data }));
  },
  setDates: async () => {
    try {
      const { data } = await axios.get(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/dateevents'
      );
      set((state) => ({ ...state, dates: data }));
    } catch (error) {}
  },
  addDate: async (date) => {
    try {
      const { data } = await axios.post(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events',
        date
      );
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  updateDate: async (date, id) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events/${id}`,
        date
      );
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  deleteDate: async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events/${id}`
      );
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
}));

export default useStore;
