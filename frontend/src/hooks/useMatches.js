import axios from 'axios';
import { useState, useContext } from 'react';
import useStore from '@/store/globalstore';
import AppContext from '../../contexts/AppContext';

export function useMatches(){

    const { matches, setMatches, modifyMatches } = useStore();

    const [loading, setLoading] = useState(false);

    const handlerCreate = async (match)=>{
        try{
            const { data }=await axios.post(
                'http://localhost:3001/api/matches', match
            );
            if(data){
                await modifyMatches([data.newMatch,...matches])
            }
        }catch(error){
            throw new Error(error.message)
        }
    };

    const handlerModify = async (match) => {
        try {
            const { data } = await axios.put(
            `http://localhost:3001/api/matches/${match._id}`,
            match
            );

            if(data){
                const updateMatches = [...matches];
                const id =data.match._id;
                const index = updateMatches.findIndex((m)=>m._id ===id);
                updateMatches[index] = data.match;
                modifyMatches(updateMatches);

            }
        } catch (error) {
            throw new Error(error.message)
        }
        };


    const handlerDelete = async (_id) => {
        try {
            const { data } = await axios.delete(
                `http://localhost:3001/api/matches/${_id}`
            );

            if(data.msg){
                const updateMatches = [...matches].filter((m)=>m._id !==_id);
                modifyMatches(updateMatches);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw new Error(error.message)
        }
        };


    const getMatches = async ()=>{
        if(matches.length===0){
            setLoading(true);
            await setMatches();
            setLoading(false);
        }
    };

    return{
        handlerCreate,
        handlerModify,
        handlerDelete,
        getMatches,
        loading,
        setLoading,
    };
}