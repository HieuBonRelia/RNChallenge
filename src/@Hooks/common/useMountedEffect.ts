import {useEffect, useRef} from 'react';

const useMountedEffect = (cb: () => void | (() => void) | Promise<void>) => {
  const mounted = useRef<boolean>(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      const result = cb();
      return typeof result === 'function' ? result : () => {};
    }
  }, [cb]);
};

export default useMountedEffect;
