import { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../contexts/AppContext';

export function useTestimonials() {
  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);
  const [id, setId] = useState(false);
  const [createTestimonial, setCreateTestimonial] = useState(false);
  const [modifyTestimony, setModifyTestimony] = useState(false);
  const [postModify, setPostModify] = useState();
  const [loading, setLoading] = useState(false);
  const { testimonials, setTestiminials, setShowMessageModal } =
    useContext(AppContext);

  const showModalForm = () => {
    setShowForm(!showForm);
  };
  const showModalWarn = () => {
    setShowWarn(!showWarn);
  };
  const showModalModify = () => {
    setShowModify(!showModify);
  };

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        // `https://club-agronomia-central-production.up.railway.app/api/testimonials/${id}`
        `https://club-agronomia-central-production.up.railway.app/api/testimonials/${id}`
      );
      data && setTestiminials(testimonials.filter((tes) => tes._id !== id));
      setLoading(false);
      setShowMessageModal('Testimonio Eliminado con Exito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(
        // `https://club-agronomia-central-production.up.railway.app/api/testimonials`,
        `https://club-agronomia-central-production.up.railway.app/api/testimonials`,
        post
      );
      data && setTestiminials([data.newTestimonial, ...testimonials]);
      setLoading(false);
      setShowMessageModal('Testimonio Creado con Exito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(
        // `https://club-agronomia-central-production.up.railway.app/api/testimonials/${post.id}`,
        `https://club-agronomia-central-production.up.railway.app/api/testimonials/${post.id}`,
        post
      );
      if (data) {
        const updateTestimonial = [...testimonials];
        const id = data.testimonial._id;
        const index = updateTestimonial.findIndex((tes) => tes._id === id);
        updateTestimonial[index] = data.testimonial;
        setTestiminials(updateTestimonial);
        setLoading(false);
        setShowMessageModal('Testimonio Editado con Exito');
      }
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const stateGlobalTestimonials = async () => {
    try {
      if (testimonials.length === 0) {
        setLoading(true);
        const res = await axios.get(
          // 'https://club-agronomia-central-production.up.railway.app/api/testimonials'
          'https://club-agronomia-central-production.up.railway.app/api/testimonials'
        );
        const response = res.data.reverse();
        setTestiminials(response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  return {
    showModalForm,
    showModalWarn,
    showModalModify,
    showModify,
    showWarn,
    showForm,
    createTestimonial,
    setCreateTestimonial,
    modifyTestimony,
    setModifyTestimony,
    postModify,
    setPostModify,
    handlerDelete,
    handlerCreate,
    handlerModify,
    id,
    setId,
    stateGlobalTestimonials,
    loading,
    setLoading,
  };
}
