import './App.css';
import React from 'react';
import axios from 'axios';

import MyCard from './Components/MyCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: {},
      friendsData: []
    }
  }
  componentDidMount() {
    this.handleMyData()
  }
  handleMyData = () => {
    console.log('state Setter invoked')
    axios.get('https://api.github.com/users/damonbogich')
    .then(res => {
      console.log(res)
      let userObj = {Name: res.data.name, City: res.data.location}
      this.setState({myData: userObj})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <MyCard data={this.state.myData}/>
      </div>
    )
  }
}

export default App;
