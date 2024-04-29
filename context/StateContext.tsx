import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context value
interface StateContextType {
  serviceData: any; // Adjust the type as per your data structure
  updateServiceData: React.Dispatch<React.SetStateAction<any>>; // Adjust the type as per your data structure
}

// Create a context with an initial value of null
export const StateContext = createContext<StateContextType | null>(null);

interface StateProviderProps {
  children: ReactNode;
}
// Create a provider component
export const StateProvider: React.FC<StateProviderProps>  = ({ children }) => {
  const [serviceData, setServiceData] = useState<any[]>([]);

  const updateServiceData = (newData: any) => {
    const index = serviceData.findIndex(
      (data) =>
        data.cleanerName === newData.cleanerName && data.service === newData.service
    ); 

    if (index !== -1) {
      // If it is, remove it
      const updatedData = [...serviceData];
      updatedData.splice(index, 1);
      setServiceData(updatedData);
    } else {
      // Otherwise, add it
      setServiceData((prevData: any) => [...prevData, newData]);
    }
  };

  return (
    <StateContext.Provider value={{ serviceData, updateServiceData }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the state
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};
