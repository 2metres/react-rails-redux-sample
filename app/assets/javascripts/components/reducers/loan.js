import { SET_LOAN_AMOUNT, SET_LOAN_TERM } from '../actions/loan';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions'

const initialState = Immutable.Map({
  loanAmount: null,
  loanTerm: null
});

const loanReducer = handleActions(
  {
    [SET_LOAN_AMOUNT] (state, action) {
      return state.set('loanAmount', action.payload);
    },
    [SET_LOAN_TERM] (state, action) {
      return state.set('loanTerm', action.payload);
    }
  },
  initialState
);

export default loanReducer;
