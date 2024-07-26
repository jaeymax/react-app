import React, { useState, useEffect } from 'react'

const useScreenSize = (screenSize:number) => {

  const [isLarger, setIsLarger] = useState<boolean>(window.innerWidth > screenSize);  

  useEffect(() => {
    const handleResize = () => {
      setIsLarger(window.innerWidth > screenSize);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  return isLarger;
}

export default useScreenSize
