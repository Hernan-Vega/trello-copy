/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import { Form } from '../Form/Form';
import { Confirm } from '../Confirm/Confirm';
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
  const [confirmDeleteTask, setConfirmDeleteTask] = useState(false);

  const Handling = () => {
    return isEditing && !confirmDeleteTask ? (
      <Form
        isEdit
        edittingCard={title}
        checker={isEditing}
        onSubmit={submitCardChange}
        handleChange={handleCardEdit}
      />
    ) : (
      <Confirm
        id={cardId}
        onClickConfirm={deleteTask}
        onClickCancel={areYouSure}
      />
    );
  };

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

  const areYouSure = () => {
    setConfirmDeleteTask((prevState) => !prevState);
  };

  const deleteTask = (id) => {
    handleDeleteTask(id);
    setConfirmDeleteTask((prevState) => !prevState);
  };

  return (
    <li key={cardId}>
      {!isEditing && !confirmDeleteTask ? (
        <div className="card">
          <div className="card__carddiv">
            <span>{title}</span>
          </div>
          <button type="button" onClick={onClickCardChange}>
            <img src={iconedit} alt="edit" />
          </button>
          <button type="button" onClick={areYouSure}>
            <img src={icondelete} alt="delete" />
          </button>
        </div>
      ) : (
        <Handling />
      )}
    </li>
  );
};

export { Card };
