import { create } from 'zustand';
import axios from 'axios';
const useStore = create((set, get) => ({
  atletas: [],
  reservas: [],
  directiva: [],
  dates: [],
  matches: [],

  setAtletas: async () => {
    const { data } = await axios.get(
      'https://club-agronomia-central-production.up.railway.app//api/athletes'
    );
    set((state) => ({ ...state, atletas: data.reverse() }));
  },
  setReservas: async () => {
    try {
      const { data } = await axios.get(
        'https://club-agronomia-central-production.up.railway.app//api/events'
      );
      set((state) => ({ ...state, reservas: data }));
    } catch (error) {}
  },
  setDirectiva: async () => {
    const { data } = await axios.get(
      'https://club-agronomia-central-production.up.railway.app//api/directors'
    );
    set((state) => ({ ...state, directiva: data }));
  },
  editDirectiva: async (props) => {
    try {
      const { data } = await axios.put(
        `https://club-agronomia-central-production.up.railway.app//api/directors/${props.id}`,
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
  setDates: async () => {
    try {
      const { data } = await axios.get(
        'https://club-agronomia-central-production.up.railway.app//api/dateevents'
      );
      set((state) => ({ ...state, dates: data }));
    } catch (error) {}
  },
  addDate: async (date) => {
    try {
      const { data } = await axios.post(
        'https://club-agronomia-central-production.up.railway.app//api/events',
        date
      );
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  updateDate: async (date, id) => {
    try {
      const { data } = await axios.put(
        `https://club-agronomia-central-production.up.railway.app//api/events/${id}`,
        date
      );
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  deleteDate: async (id) => {
    try {
      const { data } = await axios.delete(
        `https://club-agronomia-central-production.up.railway.app//api/events/${id}`
      );
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  setMatches: async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/matches');
      set((state) => ({ ...state, matches: data }));
    } catch (error) {}
  },
  modifyMatches: (data) => {
    set((state) => ({
      ...state,
      matches: data,
    }));
    // console.log(get().matches)
  },
}));

export default useStore;
