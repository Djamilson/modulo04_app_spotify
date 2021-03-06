import { typeCastExpression } from "@babel/types";

export const Types = {
  GET_REQUEST: "playlist/GET_REQUEST",
  GET_SUCCESS: "playlist/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function playlist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case typeCastExpression.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}
export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistsSccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
