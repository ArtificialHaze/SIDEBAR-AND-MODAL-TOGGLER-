import React, { useState, useContext } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };

  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const openModal = () => {
    setIsSideModalOpen(true);
  };

  const closeModal = () => {
    setIsSideModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideModalOpen,
        isSideBarOpen,
        setIsSideBarOpen,
        setIsSideModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
