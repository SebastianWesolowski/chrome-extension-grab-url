import React from 'react';
// import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Grab URL</h2>
        <p>Select the text and use the keyboard shortcut a+b. This will trigger a copy event, resulting in the selected content and a link to the current web page being placed in the clipboard.</p>
      </header>
    </div>
  );
};

export default Popup;
