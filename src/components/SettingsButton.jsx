// SettingsButton.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import SettingDetails from './SettingDetails';

const SettingsButton = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [settingType, setSettingType] = useState('');

  const openSettingsModal = (type) => {
    setShowSettings(true);
    setSettingType(type);
  };

  const closeSettingsModal = () => {
    setShowSettings(false);
    setSettingType('');
  };

  return (
    <>
      <button className='settings-button' onClick={() => openSettingsModal('Giới thiệu sản phẩm')}>
        <FontAwesomeIcon icon={faCog} />
      </button>

      {showSettings && (
        <SettingDetails onClose={closeSettingsModal} settingType={settingType} />
      )}
    </>
  );
};

export default SettingsButton;
