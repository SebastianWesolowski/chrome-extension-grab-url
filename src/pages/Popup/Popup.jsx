import React, {useEffect, useState} from 'react';
// import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {

  const [settingWebhook, setSettingWebhook] = useState('');
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get(['settingsWebhook'], function(items) {
      if(items.settingsWebhook){
        setSettingWebhook(items.settingsWebhook)
      }
    });
  }, []);


  useEffect(() => {
    if(isSave){
      setInterval(() => {
        setIsSave(false)
      }, 1000)
    }
  }, [isSave]);

  const handleWebhookChange = (e) => {
    setSettingWebhook(e.target.value);
    chrome.storage.sync.set({'settingsWebhook': e.target.value}, function() {
      setIsSave(true);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grab URL</h2>
        <p>Select the text and use the keyboard shortcut a+b. This will trigger a copy event, resulting in the selected content and a link to the current web page being placed in the clipboard.</p>
        <p>Setup Webhook:</p>
        <input value={settingWebhook} onChange={handleWebhookChange}></input>
        <p>{isSave ? `Webhook Saved: ${settingWebhook}` : ''}</p>
      </header>
    {/*<button onClick={() => handleClicked() }>Save Webhook</button>*/}
    </div>
  );
};

export default Popup;
