import {deleteCardAction} from '@Store/cardReducer';
import {AppDispatch} from '@Store/types';
import {useDispatch} from 'react-redux';
import {useEventCallback} from './common';

export const useDeleteCard = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteCard = useEventCallback(() => {
    dispatch(deleteCardAction(id));
  });

  return {deleteCard};
};
