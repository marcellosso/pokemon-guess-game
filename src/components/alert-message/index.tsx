import React, { useEffect } from 'react';

import './styles.css';

interface IAlertMessage {
  message: string,
  setCloseAlert: () => void,
}

const AlertMessage = ({ message, setCloseAlert } : IAlertMessage) => {
  useEffect(() => {
    setTimeout(() => {
      const getAlertContainerElem = document.getElementById('alertContainer');

      if (getAlertContainerElem) {
        getAlertContainerElem.style.opacity = '1';
        getAlertContainerElem.classList.add('closeAlert');
      }

      setTimeout(() => {
        setCloseAlert();
      }, 1000);
    }, 2000);
  }, [setCloseAlert]);

  return (
    <div className='alertMessage'>
      <div className="mainAlertContainer" id='alertContainer'>
        <p>{message}</p>
      </div>
    </div>
  );
};
      
export default AlertMessage;