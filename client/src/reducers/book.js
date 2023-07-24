import { BOOK_CONTENT, GET_BOOKS, MORE_LOADED } from "../actions/types";

const initalState = {
  books: [],
  bookContent: [],
  page: 0,
  loading: true,
  error: {},
};

const bookReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        loading: false,
        books: payload,
        page: 1
      };
    case MORE_LOADED:
      return{
        ...state,
        loading: false,
        books: [...state.books, ...payload],
        page: state.page+1
      }
    case BOOK_CONTENT:
      return{
        ...state,
        loading:false,
        bookContent: payload,
      }
    default:
      return state;
  }
};

export default bookReducer;