import React, { useEffect, useState } from 'react';
import Pc from './pc';
import Mobile from './mobile';

function Directory(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  return screenWidth >= 768 ? <Pc></Pc> : <Mobile></Mobile>;
}

export default Directory;
