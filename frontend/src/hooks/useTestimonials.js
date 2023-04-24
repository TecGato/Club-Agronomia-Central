import { useState } from 'react';
import axios from 'axios';

export function useTestimonials() {
  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);
  const [id, setId] = useState(false);
  const [createTestimonial, setCreateTestimonial] = useState(false);
  const [modifyTestimony, setModifyTestimony] = useState(false);
  const [postModify, setPostModify] = useState()

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
      await axios.delete(`http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials`,
        post
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials/${post.id}`,
        post
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
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
  };
}
