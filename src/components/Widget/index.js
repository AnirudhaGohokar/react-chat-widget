import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleChat, addUserMessage } from '@actions';

import WidgetLayout from './layout';

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      this.props.dispatch(toggleChat());
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat());
  }
  handleQuickButtonClicked = (event, value) => {
    event.preventDefault();

    if(this.props.handleQuickButtonClicked) {
      this.props.handleQuickButtonClicked(value);
    }
  }


  // handleMessageSubmit = (event) => {
  //   event.preventDefault();
  //   const userInput = event.target.message.value;
  //   if (userInput) {
  //     this.props.dispatch(addUserMessage(userInput));
  //     this.props.handleNewUserMessage(userInput);
  //   }
  //   event.target.message.value = '';
  // }

  handleMessageSubmit = (message) => {
    const { dispatch, handleNewUserMessage } = this.props
    // console.log('MESSAGE TO SEND IS: ', message)
    dispatch(addUserMessage(message))
    handleNewUserMessage(message)

  }

  startRecording = () => {
    console.log('rec start');
    this.props.startRecording();
  }
  stopRecording = () => {
    console.log('rec stop');
    this.props.stopRecording();
  }

  render() {
    return (
      <WidgetLayout
        onToggleConversation={this.toggleConversation}
        onSendMessage={this.handleMessageSubmit}
        onQuickButtonClicked={this.handleQuickButtonClicked}
        title={this.props.title}
        titleAvatar={this.props.titleAvatar}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        autofocus={this.props.autofocus}
        customLauncher={this.props.customLauncher}
        startRecording={this.startRecording}
        stopRecording={this.stopRecording}
        isMicAvailable={this.props.isMicAvailable}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  handleQuickButtonClicked: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func,
  customToggleCallback: PropTypes.func,
  isMicAvailable:PropTypes.bool
};

export default connect()(Widget);