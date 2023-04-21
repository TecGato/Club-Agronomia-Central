import { useState } from 'react';

export const useFileEncoding = () => {
  const [encodedFile, setEncodedFile] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    previewEncodedFile(file);
  };

  const previewEncodedFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEncodedFile(reader.result);
    };
  };

  const handleEncodedFileSubmit = () => {
    return encodedFile;
  };

  return {
    handleFileChange,
    handleEncodedFileSubmit,
  };
};
