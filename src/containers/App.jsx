import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer';
import Login from '../components/Login';
import * as authActions from '../actions/auth';
import Register from '../components/Register';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  handleLoginGithub(){
    this.props.signInWithGithub();
  }

  render() {
      return (this.props.state.authenticated)
        ?(
          <div>
            <HeaderContainer />
            {this.props.children}
          </div>
        )
        : this.props.location.pathname === '/register' ?
          <Register {...this.props}/>
        : <Login {...this.props}/>;
  }

}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  user: PropTypes.object,
  signInWithGithub: PropTypes.func,
  state: PropTypes.object,
  location: PropTypes.object

};

function mapStateToProps(state) {
  return {
     state: state.auth
  };
}


export default connect(
  mapStateToProps,
  authActions
)(App);
