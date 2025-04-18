import axios from 'axios';
import { NOTES_DELETE_FAIL, NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS, NOTES_UPDATE_FAIL, NOTES_UPDATE_REQUEST, NOTES_UPDATE_SUCCESS, NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS } from '../constants/noteConstants';

export const listNotes=() => async (dispatch,getState) => {
    try {
        dispatch({
            type: NOTE_LIST_REQUEST,
        });

        const {
            userLogin:{userInfo},
        } =getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`http://localhost:5000/api/notes/get`, config);
        dispatch({
            type: NOTE_LIST_SUCCESS,
            payload:data,
        });
    } catch (error) {
        const message=
        error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: NOTE_LIST_FAIL,
            payload:message,
        });
    }
};
export const createNotes=(title, content, catagory ) => async (dispatch,getState) => {
    try {
        dispatch({
            type: NOTE_CREATE_REQUEST,
        });

        const {
            userLogin:{userInfo},
        } =getState();

        const config = {
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/notes/create`,{ title, content,catagory }, config);
        dispatch({
            type: NOTE_CREATE_SUCCESS,
            payload:data,
        });
    } catch (error) {
        const message=
        error.response && error.response.data.message? error.response.data.message:error.message;
        dispatch({
            type: NOTE_CREATE_FAIL,
            payload:message,
        });
    }
};
export const updateNoteAction = (id, title, content, catagory) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: NOTES_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/notes/${id}`,
        { title, content, catagory },
        config
      );
  
      dispatch({
        type: NOTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_UPDATE_FAIL,
        payload: message,
      });
    }
};
export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/notes/${id}`, config);
  
      dispatch({
        type: NOTES_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_DELETE_FAIL,
        payload: message,
      });
    }
};
  