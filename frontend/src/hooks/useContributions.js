import { useState } from "react";
import axios from "axios";

export const useContributions = () => {
  const [preferenceId, setPreferenceID] = useState(null);
  const [contribution, setContribution] = useState({ price: "" });

  const handleInput = (e) => {
    setContribution({
      price: e.target.value,
    });
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/donations",
        contribution
      );
      console.log(response.data.global);
      setPreferenceID(response.data.global);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleInput,
    handleClick,
    preferenceId,
    contribution
  };
};
