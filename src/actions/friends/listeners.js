import { SET_FRIENDS, SET_USERS } from './action-types';

export function registerListeners(){
  return (dispatch, getState) => {

    const { firebase, auth } = getState();
    const ref = firebase.child(`users/${auth.id}/friends`);
    const refGlobal = firebase.root();
    const usersRef = firebase.child('users');

    let friends = [];

    ref.on('value', snapshot => {
      friends = snapshot.val() === null ? [] : snapshot.val();
      refGlobal.once('value', snapshot => {({
        type: SET_FRIENDS,
        friends: Object.values(snapshot.val().users || []).reduce( (init, user) => friends.indexOf(user.name) !== -1 ? init.concat({user, groups:user.groups, img:user.img, name:user.name}) : init, []),
        users: Object.keys(snapshot.val().users || []).reduce( (init, id) => init.concat({id, img:snapshot.val().users[id].img, name:snapshot.val().users[id].name}), [])
      });
    });

  });


  };
}

export function unregisterListeners(){
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const ref = firebase.child(`users/${auth.id}/friends`);
    const usersRef = firebase.child('users');
    usersRef.off();
    ref.off();
    dispatch({
      type: SET_FRIENDS,
      friends: []
    });
    dispatch({
      type: SET_USERS,
      users: []
    });
  };
}
