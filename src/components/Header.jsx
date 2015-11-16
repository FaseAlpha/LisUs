import React, { Component, PropTypes } from 'react';
import Nav from './Nav';
import { Link } from 'react-router';
import ItemList from './ItemList';


export default class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      newLists: []
    };
  }

  handleOnBlur(){
    setTimeout(() => this.handleVisibility(), 300);
  }

  handleVisibility(){
    this.refs.inputText.value="";
    this.state.isVisible ? this.setState({ isVisible: false }) : this.setState({ isVisible: true });
    this.setState({newLists: []});
  }

  handleFilterList(event){
 		let updateLists = this.props.lists;
 		updateLists = updateLists.filter( list=> list.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
 		this.setState({newLists: updateLists});
 	}

  render() {
    return(

      <div className="header">

          <div className="navegador">
            <Nav />
            <span className=" btn btn-info  biggerGlyphicon  glyphicon  glyphicon-calendar calendario" aria-hidden="true"></span>
            <div className="search">
              <div className="search-btn-input">
                <span className="btn btn-info biggerGlyphicon glyphicon glyphicon-search pull-left" aria-hidden="true" onClick={ () => this.handleVisibility()} />
                <input ref="inputText" type="text" className={`${this.state.isVisible ? 'form-control' : 'hidden' }`} placeholder="Search your list..." onChange={ (event) => this.handleFilterList(event)} onBlur={ () => this.handleOnBlur()}/>
              </div>
              <div className="search-ul">
                <ul className={`${this.state.isVisible ? '' : 'hidden' }`}>
                  {
                    this.state.newLists.map( (list, index) => index<5 ? <ItemList key={index} list={list} /> : null  )
                  }
                </ul>
              </div>
            </div>
          </div>


          <div className="principal">
            <Link to="/list"><img className="image" src={"https://facebook.github.io/react/img/logo.svg"}/></Link>
            <h4>ListUs</h4>
          </div>

      </div>
    );
  }

}

Header.propTypes = {
  lists: PropTypes.array.isRequired
};

Header.defaultProps = {
  lists: []
};
