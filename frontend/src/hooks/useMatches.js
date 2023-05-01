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

    return{
        handlerCreate,
        // handlerModify,
        // handlerDelete,
    };
}