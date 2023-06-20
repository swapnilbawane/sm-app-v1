import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  const modalStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.0)',
     
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
      background: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '20px',
    },
  };


// Set the root element of the modal
Modal.setAppElement('#root');

export function ModalTests() { 

const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };


// new 
let subtitle;

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}


    return(
        <>
        Modal Tests. 
        <Link to="/home"> Home </Link>
        <div>
        <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello Modal!</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
        </div>

<div>
<button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
</div>

<div>
<ReactModal
      isOpen={false}
      onRequestClose={() => {}}
      contentLabel="Example Modal"
    >
      <p>Modal Content</p>
    </ReactModal>
</div>

<div>
<button onClick={handleOpenModal}>Open Modal</button>

<ReactModal
  isOpen={modalIsOpen}
  onRequestClose={handleCloseModal}
  contentLabel="Example Modal"
  style={modalStyles}
>
  <div style={{margin: "auto"}}> 
  <h2>Modal Title</h2>
  <p>This is the content of the modal.</p>

  <form>
    <label>
      Name:
      <input type="text" />
    </label>

    <button type="submit">Submit</button>
  </form>

  <img src="https://via.placeholder.com/400" alt="Modal Image" />

  <button onClick={handleCloseModal}>Close Modal</button>
  </div>
</ReactModal>   
     </div>

        </>
    );
}