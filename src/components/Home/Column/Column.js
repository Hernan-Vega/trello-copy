import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { getItemStyle } from 'utils/styles';
import { Card } from '../Card/Card';
import { Confirm } from '../Confirm/Confirm';
import { Form } from '../Form/Form';
import icondelete from '../../../assets/icondelete.svg';

import './Column.scss';

const Column = React.forwardRef(
  (
    {
      name,
      id,
      index,
      cards,
      handleResize,
      handleTitleChange,
      handleDeleteColumn,
      addNewCard,
      cardListHandler,
      ...props
    },
    ref,
  ) => {
    const [newCard, setNewCard] = useState('');
    const [showNewCardForm, setShowNewCardForm] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const onClickNewCard = () => {
      setShowNewCardForm((prevState) => !prevState);
    };

    const handleNewCardChange = (event) => {
      handleResize(event);

      const cardName = event.target.value;
      setNewCard(cardName);
    };

    const onSubmitNewCard = (event) => {
      event.preventDefault();

      const cardsIdArray = cards.map(({ cardId }) => cardId.split('-')[0]);
      const maxId = Math.max(...cardsIdArray);

      const newCardId =
        cardsIdArray.length === 0 ? `1-${id}` : `${maxId + 1}-${id}`;
      const card = { cardId: newCardId, title: newCard };
      const newCards = [...cards, card];

      cardListHandler(newCards, index);
      setNewCard('');
      onClickNewCard();
    };

    const taskEdit = (newTitle, taskId, cardIndex) => {
      const cardsCopy = [...cards];
      const edittedTask = { title: newTitle, cardId: taskId };

      cardsCopy[cardIndex] = edittedTask;
      cardListHandler(cardsCopy, index);
    };

    const areYouSure = () => {
      setConfirmDelete((prevState) => !prevState);
    };

    const handleDeleteTask = (taskId) => {
      const cardsWithoutDeleted = cards.filter(
        ({ cardId }) => cardId !== taskId,
      );

      cardListHandler(cardsWithoutDeleted, index);
    };

    const deleteColumn = (columnId) => {
      setConfirmDelete(false);
      handleDeleteColumn(columnId);
    };

    return (
      <div className="column" ref={ref} {...props}>
        {confirmDelete ? (
          <Confirm
            isColumn
            id={id}
            onClickConfirm={deleteColumn}
            onClickCancel={areYouSure}
          />
        ) : (
          <div className="column__top">
            <textarea onChange={(event) => handleTitleChange(event, id)}>
              {name}
            </textarea>
            <button type="button" onClick={areYouSure}>
              <img src={icondelete} alt="delete" />
            </button>
          </div>
        )}
        <ul className="column__cardlist">
          {cards.map(({ title, cardId }, cardIndex) => (
            <Draggable key={cardId} draggableId={cardId} index={cardIndex}>
              {(provided, snapshot) => {
                return (
                  <Card
                    title={title}
                    cardId={cardId}
                    cardIndex={cardIndex}
                    handleResize={handleResize}
                    taskEdit={taskEdit}
                    handleDeleteTask={handleDeleteTask}
                    ref={provided.innerRef}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                );
              }}
            </Draggable>
          ))}
        </ul>
        <Form
          checker={showNewCardForm}
          onSubmit={onSubmitNewCard}
          handleChange={handleNewCardChange}
          onClick={onClickNewCard}
        />
      </div>
    );
  },
);

export { Column };
