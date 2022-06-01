import {configureStore} from '@reduxjs/toolkit';
import {cardReducer} from './cardReducer';
export const store = configureStore({reducer: {cardReducer}});
