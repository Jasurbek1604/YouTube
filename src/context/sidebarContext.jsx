import React, { createContext, useContext, useState } from "react";

export const SidebarContext = createContext();

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

const SidebarComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarComponent;
