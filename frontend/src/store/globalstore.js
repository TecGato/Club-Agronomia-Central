import { create } from "zustand";
import axios from "axios";
const useStore = create((set) => ({
    atletas: [],
    reservas: [],
    setAtletas: async() => {
        const { data } = await axios.get("http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/athletes");
        set((state) => ({...state, atletas: data}))},
    setReservas: async() => {
        const { data } = await axios.get("http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events");
        set((state) => ({...state, reservas: data}))}

}));

export default useStore;