import React, { Component } from 'react';
import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader } from '../index';
import logo from "@assets/ep.png";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {isMicAvailable:false};
  }
  componentDidMount() {
    setTimeout(() => {
      console.log("changing to mic");
      this.setState({isMicAvailable : true});  
    }, 5000);
  }

  handleNewUserMessage = (newMessage) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([{ label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' }]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  render() {
    return (
      <Widget
        title="Assistant"
        subtitle=""
        titleAvatar={logo}
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
        isMicAvailable={this.state.isMicAvailable}
      />
    );
  }
}