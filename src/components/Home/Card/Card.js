/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';

import { Form } from '../Form/Form';
import iconedit from '../../../assets/iconedit.svg';
import icondelete from '../../../assets/icondelete.svg';

import './Cards.scss';

const Card = React.forwardRef(
  (
    {
      title,
      cardId,
      handleResize,
      taskEdit,
      handleDeleteTask,
      cardIndex,
      ...props
    },
    ref,
  ) => {
    const [isEditing, setIsEditing] = useState(false);

    function submitCardChange(event) {
      event.preventDefault();
      onClickCardChange();
    }

    function onClickCardChange() {
      setIsEditing((prevState) => !prevState);
    }

    function handleCardEdit(event) {
      handleResize(event);

      const newTitle = event.target.value;
      taskEdit(newTitle, cardId, cardIndex);
    }

    function deleteTask(id) {
      handleDeleteTask(id);
    }

    return (
      <li key={cardId} id={cardId} ref={ref} {...props}>
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
  },
);

export { Card };
