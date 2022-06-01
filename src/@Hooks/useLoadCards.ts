import {loadCardsAction} from '@Store/cardReducer';
import {AppDispatch, RootState} from '@Store/types';
import {Card} from '@Type';
import isEqual from 'react-fast-compare';
import {useDispatch, useSelector} from 'react-redux';
import {useEventCallback} from './common';
import useMountedEffect from './common/useMountedEffect';

export const useLoadCards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector<RootState, Card[]>(
    state => state.cardReducer.cards,
    isEqual,
  );
  const loadCardsData = useEventCallback(() => {
    dispatch(loadCardsAction());
  });
  useMountedEffect(loadCardsData);
  return {loadCardsData, cards};
};
