import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  client,
  CREATE_CARD,
  DELETE_CARD,
  DUPLICATE_CARD,
  QUERY_CARDS,
} from '@Services';
import {Card} from '@Type';

export interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

export const loadCardsAction = createAsyncThunk('card/fetch', async () => {
  const {
    data: {cards},
  } = await client.query<{cards: Card[]}>({
    query: QUERY_CARDS,
  });
  return cards;
});

export const createCardAction = createAsyncThunk('card/create', async () => {
  const {data} = await client.mutate<{createCard: Card}>({
    mutation: CREATE_CARD,
    variables: {
      name: 'My style No: ' + new Date().getTime().toString(),
    },
  });
  return data?.createCard;
});

export const deleteCardAction = createAsyncThunk(
  'card/delete',
  async (id: string) => {
    await client.mutate({
      mutation: DELETE_CARD,
      variables: {
        id,
      },
    });
    return id;
  },
);

export const duplicateCardAction = createAsyncThunk(
  'card/duplicate',
  async (id: string) => {
    const {data} = await client.mutate<{duplicateCard: Card}>({
      mutation: DUPLICATE_CARD,
      variables: {
        id,
      },
    });
    return data?.duplicateCard;
  },
);

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadCardsAction.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
    builder.addCase(createCardAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.cards.push(action.payload);
      }
    });
    builder.addCase(duplicateCardAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.cards.push(action.payload);
      }
    });
    builder.addCase(deleteCardAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.cards = state.cards.filter(el => el.id !== action.payload);
      }
    });
  },
});

export const {} = cardSlice.actions;

export const cardReducer = cardSlice.reducer;
