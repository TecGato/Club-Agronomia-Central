import axios from 'axios';

export function useMatches(){

    const handlerCreate = async (match)=>{
        try{
            const { data }=await axios.post(
                'http://localhost:3001/api/matches', match
            );
            return data;
        }catch(error){
            throw new Error(error.message)
        }
    };

    const handlerModify = async (match) => {
        try {
            const { data } = await axios.put(
            `http://localhost:3001/api/matches/${match.id}`,
            match
            );
            return data;
        } catch (error) {
            throw new Error(error.message)
        }
        };


    const handlerDelete = async (id) => {
        try {
            const { data } = await axios.delete(
                `http://localhost:3001/api/matches/${id}`
            );
        } catch (error) {
            throw new Error(error.message)
        }
        };


    return{
        handlerCreate,
        handlerModify,
        handlerDelete,
    };
}