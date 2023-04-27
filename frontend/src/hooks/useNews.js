import axios from 'axios';
import { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';

export function useNews() {
  const { newsGlobal, setNewsGlobal } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts/${id}`
      );
      data && setNewsGlobal(newsGlobal.filter((tes) => tes._id !== id));
      setLoading(false);
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts`,
        post
      );
      data && setNewsGlobal([data.newPost, ...newsGlobal]);
      setLoading(false);
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts/${post.id}`,
        post
      );
      if (data) {
        const updateNews = [...newsGlobal];
        const id = data.post._id;
        const index = updateNews.findIndex((n) => n._id === id);
        updateNews[index] = data.post;
        setNewsGlobal(updateNews);
        setLoading(false);
      }
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const stateGlobalNews = async () => {
    if (newsGlobal.length === 0) {
      const res = await axios.get(
        'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts'
      );
      const response = res.data;
      setNewsGlobal(response);
      setLoading(false);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
    stateGlobalNews,
    loading,
    setLoading,
  };
}
