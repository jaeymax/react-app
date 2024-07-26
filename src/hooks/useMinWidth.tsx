import { useState, useEffect } from 'react'

const useMinWidth = (screenSize:number) => {

  const [minWidth, setMinWidth] = useState<boolean>(window.innerWidth >= screenSize);  

  useEffect(() => {
    const handleResize = () => {
      setMinWidth(window.innerWidth >= screenSize);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  return minWidth;
}

export default useMinWidth
