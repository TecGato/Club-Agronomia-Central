import axios from 'axios';
import { useState, useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import useStore from '@/store/globalstore';

export function useAthletes() {
  const { atletas, setAtletas, modifyAtletas } = useStore();
  const [loading, setLoading] = useState(false);
  const { setShowMessageModal } = useContext(AppContext);

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/athletes/${id}`
      );
      if (data.msg) {
        const updateAtletas = [...atletas].filter((atle) => atle.id !== id);
        modifyAtletas(updateAtletas);
      }
      setLoading(false);
      setShowMessageModal('Atleta Eliminado con Exito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerCreate = async (athlete) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/athletes`,
        athlete
      );
      if (data) {
        await modifyAtletas([data.newAthlete, ...atletas]);
      }
      setShowMessageModal('Atleta Añadido con Exito');
    } catch (error) {
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerModify = async (athlete) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/api/athletes/${athlete.id}`,
        athlete
      );
      if (data) {
        const updateAtletas = [...atletas];
        const { id } = data.athlete;
        const index = updateAtletas.findIndex((atle) => atle.id === id);
        updateAtletas[index] = data.athlete;
        modifyAtletas(updateAtletas);
        setShowMessageModal('Atleta Editado con Exito');
      }
    } catch (error) {
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const getAthletes = async () => {
    if (atletas.length === 0) {
      setLoading(true);
      await setAtletas();
      setLoading(false);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
    getAthletes,
    loading,
    setLoading,
  };
}
