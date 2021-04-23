/* eslint-disable jsx-a11y/no-autofocus */
import { useState, useRef } from 'react';
import './Cards.scss';
import iconedit from '../../../assets/iconedit.svg';
import icondelete from '../../../assets/icondelete.svg';

const Card = ({
  title,
  cardId,
  cardIndex,
  handleResize,
  taskEdit,
  handleDeleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputElement = useRef(null);

  const handleCardChange = () => {
    setIsEditing((prevState) => !prevState);
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  const handleCardEdit = (event, id) => {
    handleResize(event);

    const newTitle = event.target.value;
    taskEdit(newTitle, id, cardIndex);
  };

  const deleteTask = (id) => {
    handleDeleteTask(id);
  };

  return (
    <li key={cardId}>
      <div className="card">
        <textarea
          disabled={!isEditing}
          ref={inputElement}
          onChange={(event) => handleCardEdit(event, cardId)}
        >
          {title}
        </textarea>
        <button type="button" onClick={handleCardChange}>
          <img src={iconedit} alt="edit" />
        </button>
        <button type="button" onClick={() => deleteTask(cardId)}>
          <img src={icondelete} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export { Card };
