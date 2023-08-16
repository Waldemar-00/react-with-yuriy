import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function modalHandler() {
    setShowModal(!showModal);
  }


  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={modalHandler}>
          Удалить
        </button>
      </div>
      {showModal ?  <Backdrop onClick={modalHandler} /> : null}
      {showModal ?  <Modal text='Вы уверены?' onClose={modalHandler} /> : null}
    </div>
  );
}

export default Todo;
