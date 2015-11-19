import { getId } from './index';
import { serverUsers, serverGroups, serverLists, serverTasks, serverComments } from './dataBase';


export const lists = [
  {
    id: getId(),
    title: 'Real Madrid',
    participants: []//id group or id friend
  },
  {
    id: getId(),
    title: 'Barsa',
    participants: []
  },
  {
    id: getId(),
    title: 'Patetic',
    participants: []
  },
  {
    id: getId(),
    title: 'Valencia',
    participants: []
  },
  {
    id: getId(),
    title: 'Celta',
    participants: []
  },
  {
    id: getId(),
    title: 'Betis',
    participants: []
  }
];

export const comments = {
  1: [ { idList:1, user:'pepe', date:'12/7/2015', msg:'eeeeee'}, { idList:1, user:'juan', date:'12/7/2015', msg:'wwww'}],
  2: [ { idList:2, user:'pepe', date:'13/7/2015', msg:'goewjpe'}, { idList:2, user:'juan', date:'13/7/2015', msg:'trtrt'}]
};

export const friends = [
  {
    id: '00',
    name: 'Loli',
    groups: ['0', '1'],
    img: 'http://www.planwallpaper.com/static/images/3d_Creative_guitar_desktop_wallpaper_TUZQIme.jpg'
  },
  {
    id: '11',
    name: 'Pepe',
    groups: ['0'],
    img: 'http://www.planwallpaper.com/static/images/3d-animal-backgrounds-17306-17862-hd-wallpapers_MkXEx9v.jpg'
  },
  {
    id: '22',
    name: 'Pepa',
    groups: ['0', '1'],
    img: 'http://www.planwallpaper.com/static/images/3d-games-wallpapers-3d-picture-3d-wallpaper_oWEbyQ7.jpg'
  },
  {
    id: '33',
    name: 'Juan',
    groups: [],
    img: 'http://pngimg.com/upload/motorcycle_PNG5346.png'
  },
  {
    id: '44',
    name: 'Raúl',
    groups: [],
    img: ''
  },
  {
    id: '55',
    name: 'Adrián',
    groups: [],
    img: ''
  },

];

export const tasks = {
	0: {
    id: '0',
		idList: lists[1].id,
		title: 'Messi',
    participants: []
	},
  1: {
    id: '1',
    idLists: lists[1].id,
    title: 'Neymar',
    participants: []
  },
  2: {
    id: '2',
    idList: lists[1].id,
    title: 'Iniesta',
    participants: []
  },
  3: {
    id: '3',
    idList: lists[1].id,
    title: 'Suarez',
    participants: []
  },
  7: {
    id: '7',
    idList: lists[0].id,
    title: 'James',
    participants: []
  },
  8: {
    id: '8',
    idList: lists[0].id,
    title: 'Benzema',
    participants: []
  },
  9: {
    id: '9',
    idList: lists[0].id,
    title: 'Cristiano',
    participants: []
  },
  10: {
    id: '10',
    idList: lists[0].id,
    title: 'Modric',
    participants: []
  }
};

export const groups = [
  {
    id: '0',
    name: 'ListUs',
    friends: ['00', '11'],// pick up the friends id.
    showFriends: false,
    administrator: '2'
  },

  {
    id: '1',
    name: 'Empresas',
    friends: [],
    showFriends: false,
    administrator: '1'
  },

  {
    id: '2',
    name: 'Servidor',
    friends: ['22'],
    showFriends: false,
    administrator: '5'
  }

];

export const user = {
  idUser: '10',
  name: 'Troya',
  password: 'troya',
  img: 'http://www.planwallpaper.com/static/images/Conflict-HD-Wallpaper_Sf0xtpv.jpg',
  visibility: true
};

//export const user = {};

export const calendar = {display: true};

/*
export const lists = [];
export const comments = {};
export const tasks = {};
export const friends = [];
export const groups = [];
export const user = {};

export const dataBase = {
  serverUsers: serverUsers,
  serverGroups: serverGroups,
  serverLists: serverLists,
  serverTasks: serverTasks,
  serverComments: serverComments

};



//export const initialState = { lists, tasks, comments, friends, groups, user, dataBase };*/

export const initialState =  { lists, tasks, comments, friends, groups, user };
