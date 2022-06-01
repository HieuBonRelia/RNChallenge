import React, {ComponentType, MemoExoticComponent} from 'react';
import isEqual from 'react-fast-compare';

export function deepMemo<T extends ComponentType<any>>(
  component: T,
): MemoExoticComponent<T> {
  return React.memo(component, isEqual);
}
