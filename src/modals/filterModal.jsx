import React, { useState } from 'react';

const Filtermodal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="column">
        {/* <div className='flex justify-center space-x-2 mt-1'>
      <input type='checkbox'/>
      <p>Low to High</p>
        </div>
        <div className='flex justify-center space-x-2 mt-9'>
      <input type='checkbox'/>
      <p>High to  Low </p>
        </div> */}
        <button className="w-1/2 my-5 rounded bg-black text-white" onClick={onClose}>
          Close
        </button>
        
      </div>
    </div>
  );
};

export default Filtermodal;
