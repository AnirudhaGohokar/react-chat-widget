import React from 'react'; 
import PropTypes from 'prop-types';

import './styles.scss';

const Loader = props => 
<div className={`react-chat-widget-message-loader ${props.typing && 'active'}`}>
  <div className="react-chat-widget-message-loader-container">
    <span className="react-chat-widget-message-loader-dots"></span>
    <span className="react-chat-widget-message-loader-dots"></span>
    <span className="react-chat-widget-message-loader-dots"></span>
  </div>
</div>;

Loader.propTypes = {
  typing: PropTypes.bool,
};

export default Loader; 
