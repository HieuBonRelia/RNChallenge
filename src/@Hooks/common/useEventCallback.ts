import React, {useCallback} from 'react';

export function useEventCallback<T extends (...arg: any) => any>(
  callback: T,
): T {
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;

  const memoized = useCallback((...args) => {
    return callbackRef.current?.(...args);
  }, []);
  return memoized as T;
}
