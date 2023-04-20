import { useState } from 'react';
import axios from 'axios';

export const useCloudinaryUpload = () => {
  const [previewCloudinarySource, setPreviewCloudinarySource] = useState();

  const handleCloudinaryChange = (event) => {
    const file = event.target.files[0];
    previewCloudinaryFile(file);
  };

  const previewCloudinaryFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewCloudinarySource(reader.result);
    };
  };

  const handleCloudinarySubmit = (event) => {
    event.preventDefault();
    if (!previewCloudinarySource) return;
    uploadCloudinaryFile(previewCloudinarySource);
  };

  const uploadCloudinaryFile = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      const response = await axios.post('http://localhost:3001/api/uploads', {
        image: base64EncodedImage,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCloudinaryChange,
    handleCloudinarySubmit,
    previewCloudinaryFile,
    uploadCloudinaryFile,
  };
};
