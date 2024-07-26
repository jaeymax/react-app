import  { useState, useEffect } from 'react'

const useMaxWidth = (screenSize:number) => {

  const [maxWidth, setIsMaxWidth] = useState<boolean>(window.innerWidth <= screenSize);  

  useEffect(() => {
    const handleResize = () => {
      setIsMaxWidth(window.innerWidth <= screenSize);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  return maxWidth;
}

export default useMaxWidth
