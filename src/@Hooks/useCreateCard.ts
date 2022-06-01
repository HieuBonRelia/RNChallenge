import {createCardAction} from '@Store/cardReducer';
import {AppDispatch} from '@Store/types';
import {useDispatch} from 'react-redux';
import {useEventCallback} from './common';

export const useCreateCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const createCard = useEventCallback(() => {
    dispatch(createCardAction());
  });

  return {createCard};
};
