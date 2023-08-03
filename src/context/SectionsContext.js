import { createContext, useState, useEffect, useCallback } from "react";

const SectionsContext = createContext();

const SectionsProvider = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerPosition, setHeaderPosition] = useState("headerShow");
    const [oldPosition, setOldPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = useCallback(() => {
      setOldPosition(scrollPosition)
      setScrollPosition(window.scrollY);
      if (oldPosition >= scrollPosition) { setHeaderPosition("headerShow") }
      else if (oldPosition < scrollPosition){setHeaderPosition("headerHide"); setIsOpen(false)}
      /* console.log(headerPosition)
      console.log(oldPosition)
      console.log(scrollPosition) */
    }, [scrollPosition, oldPosition]);
    
    useEffect(() => {
      // Füge den Scroll-Event-Listener hinzu, wenn die Komponente montiert wird.
      window.addEventListener('scroll', handleScroll);
  
      // Entferne den Scroll-Event-Listener, wenn die Komponente unmontiert wird.
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);
    

  return (
    <SectionsContext.Provider
      value={{
        scrollPosition,
        setScrollPosition,
        headerPosition, 
        setHeaderPosition,
        oldPosition,
        setOldPosition,
        isOpen, 
        setIsOpen,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

export { SectionsContext, SectionsProvider };

