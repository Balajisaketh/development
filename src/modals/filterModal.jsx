import React from 'react';

const Filtermodal = ({ isOpen, onClose}) => {
    console.log("i am entered bey",isOpen,onClose)
  if (!isOpen) {
    return null;
  }
{
    isOpen ==true ?
    (
        <div className="modal-overlay h-auto bg-red-900 w-auto">
          <div className="modal">
            <button className="close-button" onClick={onClose}>
              Close
            </button>
            <h1>jdwohigdui</h1>
          </div>
        </div>
      ) :(
        <></>
      )

}

};

export default Filtermodal;
