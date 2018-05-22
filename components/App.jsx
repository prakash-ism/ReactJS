import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { firebaseApp } from '../firebase'
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList'

class App extends Component{

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div style={{margin: '15px'}}>
        <h3>Goals</h3>
        <hr />
        <AddGoal />
        <hr />
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <hr />
        <button
        className="btn btn-danger"
        onClick={() => this.signOut()}
        >Sign Out </button>
      </div>

    )
  }
}

function mapStateToProps(state){
  //console.log('state',state);
  return {};
}

export default connect(mapStateToProps,null)(App);
