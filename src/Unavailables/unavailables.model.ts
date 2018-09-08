import { createModel } from '@rematch/core';

type UnavailablesState = string[] | null;
const initialState: UnavailablesState = null;

const unavailables = createModel({
  state: initialState,
  reducers: {
    onCodeUnavailable(state, code: string) {
      if (state) {
        return state.push(code);
      }
      return [code]
    }
  },
  selectors: {
    getUnavailables(state) {
      return state;
    }
  }
})

export default unavailables;