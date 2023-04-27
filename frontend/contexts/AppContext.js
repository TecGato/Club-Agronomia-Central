import { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [testimonials, setTestiminials] = useState([]);
  const [newsGlobal, setNewsGlobal] = useState([]);
  
  return (
    <AppContext.Provider value={{ testimonials, setTestiminials, newsGlobal, setNewsGlobal }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;
