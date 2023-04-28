import axios from 'axios';
import { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';

export function useQuincho() {
  const { setReservations, setReservationsDates } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  
  
  const getGlobalEvents = async () => {
    try {
      const { data } = await axios.get(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events'
      );
      setReservations(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getGlobalDateEvents = async () => {
    try {
      const { data } = await axios.get(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/dateevents'
      );
      setReservationsDates(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (event) => {
    try {
      const { data } = await axios.post(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events',
        event
      );
      getGlobalDateEvents();
      getGlobalEvents();
    } catch (error) {
      console.log(error);;
    }
  };

  const handlerUpdate = async (event,id) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events/${id}`,
        event
      );
      getGlobalDateEvents();
      getGlobalEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events/${id}`
      );
      getGlobalDateEvents();
      getGlobalEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
    getGlobalEvents,
    getGlobalDateEvents,
    handlerCreate,
    handlerUpdate,
    loading,
    setLoading,
  };
}
