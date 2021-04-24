/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import { Form } from '../Form/Form';
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

  const submitCardChange = (event) => {
    event.preventDefault();
    onClickCardChange();
  };

  const onClickCardChange = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleCardEdit = (event) => {
    handleResize(event);

    const newTitle = event.target.value;
    taskEdit(newTitle, cardId, cardIndex);
  };

  const deleteTask = (id) => {
    handleDeleteTask(id);
  };

  return (
    <li key={cardId}>
      {!isEditing ? (
        <div className="card">
          <div className="card__carddiv">
            <span>{title}</span>
          </div>
          <button type="button" onClick={onClickCardChange}>
            <img src={iconedit} alt="edit" />
          </button>
          <button type="button" onClick={() => deleteTask(cardId)}>
            <img src={icondelete} alt="delete" />
          </button>
        </div>
      ) : (
        <Form
          isEdit
          edittingCard={title}
          checker={isEditing}
          onSubmit={submitCardChange}
          handleChange={handleCardEdit}
        />
      )}
    </li>
  );
};

export { Card };
