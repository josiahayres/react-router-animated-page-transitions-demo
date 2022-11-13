import React from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

export const AnimatedRoute = () => {
  const { pathname } = useLocation();

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
    }),
    []
  );

  useEffect(() => {
    api.start({
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
    });
  }, [pathname]);

  return (
    <animated.div style={props}>
      <Outlet />
    </animated.div>
  );
};
