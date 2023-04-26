import { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [testimonials, setTestiminials] = useState([]);
  return (
    <AppContext.Provider value={{ testimonials, setTestiminials }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;
