import './App.css';
import React from 'react';
import axios from 'axios';

import MyCard from './Components/MyCard';
import FriendCards from './Components/FriendCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: {},
      friendsData: []
    }
  }
  componentDidMount() {
    this.handleMyData();
    this.handleFriendsData();
  }
  //grabs my data to set to state after component mounts
  handleMyData = () => {
    console.log('state Setter invoked')
    axios.get('https://api.github.com/users/damonbogich')
    .then(res => {
      let userObj = {Name: res.data.name, City: res.data.location}
      this.setState({myData: userObj})
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  handleFriendsData = () => {
    console.log('friend data handler invoked');
    axios.get('https://api.github.com/users/damonbogich/followers')
    .then(res => {
      console.log(res, 'response from handleFriendsData')
      let friendsArray = res.data
      this.setState({friendsData: friendsArray})
    })
    .catch(err => {
      console.log(err, 'error from handleFriendsData')
    })
  }
  render() {
    return (
      <div>
        <MyCard data={this.state.myData}/>
        <FriendCards data={this.state.friendsData} />
      </div>
    )
  }
}

export default App;
