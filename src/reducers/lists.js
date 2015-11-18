import { SET_LIST, ADD_LIST, REMOVE_LIST, EDIT_LIST, ADD_FRIEND_OR_GROUP_TO_LIST } from '../actions';
import { getId } from '../utils';

function setList(state, list) {
  return list.slice();
}

function addList( state, title ){
  const id = getId();
  return state.concat({ id, 'title': title, participants: [] });
}

function removeList( state, idList ){
  return state.filter( list => list.id !== idList );
}

function editList(state, idList, title){
  return state.map( list => list.id === idList ? Object.assign( {}, list, {'title': title }) : list );
}

function addFriendGroupToList(state, idList, id){
  return state.map( list => list.id===idList ? Object.assign( {}, list, {participants:list.participants.concat(id)}) : list);
}


export default function listReducer( state = [], action){
  switch (action.type) {
    case SET_LIST:
  		return setList(state, action.list);
    case ADD_LIST:
      return addList(state, action.title);
    case REMOVE_LIST:
      return removeList(state, action.idList);
    case EDIT_LIST:
      return editList(state, action.idList, action.title);
    case ADD_FRIEND_OR_GROUP_TO_LIST:
      return addFriendGroupToList(state, action.idList, action.id);
    default:
      return state;
  }
}
