import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { switchUser, setFriends, setGroups } from '../actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { TextField, RaisedButton } from 'material-ui';
import Logo from '../components/Logo';
import { arrayPositionByObjectKey, getFriends, getGroups } from '../utils/functions';


export default class Enter extends Component {

  constructor(props) {
    super(props);
    this.state= {
      error: ''
    };
  }

  handleClickLogIn(){
    const { dataBase } = this.props;
    const pos = arrayPositionByObjectKey('name', this.refs.userLogIn.getValue(), dataBase.serverUsers);
    if( pos !== -1 ){
      if(dataBase.serverUsers[pos].password === this.refs.passwordLogIn.getValue()){
        this.props.onSwitchUser(dataBase.serverUsers[pos]);
        this.props.onSetFriends(getFriends(dataBase.serverUsers[pos].friends, dataBase.serverUsers));
        this.props.onSetGroups(getGroups(dataBase.serverUsers[pos].groups, dataBase.serverGroups));
      }
      else this.setState({error: 'User or password incorrect'});
    }
  }

  render() {
    return (
    	<div className="enter">
        <div className="enterPrincipal">
      		<div className="enterHeader"></div>
          <br/>
      		<Logo />
      		<div className="login">
  	    		<TextField 
  	    			ref = "userLogIn"
    					hintText="User"
    					underlineStyle={{borderColor:'blue',  width: '236'}}
              style={{backgroundColor: 'lightgrey', marginBottom: '10px', borderRadius: '10', paddingLeft: '10'}}
              />
    				<TextField 
    	    		ref = "passwordLogIn"
    					hintText="Password"
    					underlineStyle={{borderColor:'blue', width: '236'}}
              type="password"
              style={{backgroundColor: 'lightblue', marginBottom: '10px', borderRadius: '10', paddingLeft: '10'}}/>
    				<RaisedButton label="LOG IN" secondary  onTouchTap={()=>this.handleClickLogIn()} style={{}}/>
    			</div><br/>
    			<div><a style={{cursor: 'pointer'}}>Register</a></div>
        </div>
        <div className="enterHeader enterFooter" height="80px"></div>
    	</div>
    );
  }
}

Enter.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};


function mapStateToProps(state) {
  return {
     dataBase: state.dataBase
  };
}

function mapActionsToProps(dispatch) {
  return {
    onSwitchUser: user => dispatch(switchUser(user)),
    onSetFriends: friends => dispatch(setFriends(friends)),
    onSetGroups: groups => dispatch(setGroups(groups)),
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Enter);