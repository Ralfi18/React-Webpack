import { ADD_POST, CLEAR_ALL } from "../constants/action-types";
import axios from 'axios';
const initialState = {
  data: []
};
function postReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_POST:
        if(action.payload) {
          console.log( JSON.stringify( action.payload ) )

          const options = {
            method: 'post',
            url: 'http://ci-api.loc/api/add',
            data: action.payload,
            headers: {'Content-Type': 'application/json; utf-8'},
          }
          axios(options).then(response=>{
            console.log(response);
          });
        }
        return state;
      break;
    case CLEAR_ALL:
        return {...state, data: [] };
      break;
    default:
      return state;
  }
  return state;
};
export default postReducer;
