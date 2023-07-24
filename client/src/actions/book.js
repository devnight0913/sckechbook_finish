import api from "../utils/api";
import { GET_BOOKS, BOOK_ERROR, MORE_LOADED, BOOK_CONTENT } from "./types";

export const loadBook = () => async (dispatch) => {
  try {
    const res = await api.get("/submissions");
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: BOOK_ERROR });
  }
};

export const moreBook = (pageNumber) => async (dispatch) => {
  console.log(pageNumber);
  try {
    const res = await api.get(`/submissions/more?page=${pageNumber}`);
    dispatch({
      type: MORE_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
    dispatch({ type: BOOK_ERROR });
  }
};


export const getContent = (bookId) => async (dispatch) => {
  try {
    const res = await api.get(`/submissions/book?lid=${bookId}`);
    dispatch({
      type: BOOK_CONTENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
    dispatch({ type: BOOK_ERROR });
  }
};
