import {duplicateCardAction} from '@Store/cardReducer';
import {AppDispatch} from '@Store/types';
import {useDispatch} from 'react-redux';
import {useEventCallback} from './common';

export const useDuplicateCard = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const duplicateCard = useEventCallback(() => {
    dispatch(duplicateCardAction(id));
  });

  return {duplicateCard};
};
