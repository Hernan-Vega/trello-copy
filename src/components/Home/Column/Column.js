import { useState } from 'react';
import { Card } from '../Card/Card';
import { Form } from '../Form/Form';
import './Column.scss';
import icondelete from '../../../assets/icondelete.svg';

const Column = ({
  name,
  id,
  cards,
  index,
  handleResize,
  handleTitleChange,
  handleDeleteColumn,
  addNewCard,
  handleColumnCardEdit,
}) => {
  const [newCard, setNewCard] = useState('');
  const [showNewCardForm, setShowNewCardForm] = useState(false);

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

    const cardsIdArray = cards.map(({ cardId }) => cardId);
    const newCardId =
      cardsIdArray.length === 0 ? 1 : Math.max(...cardsIdArray) + 1;

    const card = { cardId: newCardId, title: newCard };
    const newCards = [...cards, card];

    addNewCard(newCards, index);
    setNewCard('');
    onClickNewCard();
  };

  const taskEdit = (newTitle, taskId, cardIndex) => {
    const edittedTask = { title: newTitle, cardId: taskId };
    handleColumnCardEdit(edittedTask, index, cardIndex);
  };

  return (
    <div className="column">
      <div className="column__top">
        <textarea onChange={(event) => handleTitleChange(event, id)}>
          {name}
        </textarea>
        <button type="button" onClick={() => handleDeleteColumn(id)}>
          <img src={icondelete} alt="delete" />
        </button>
      </div>
      <ul className="column__cardlist">
        {cards.map(({ title, cardId }, cardIndex) => (
          <Card
            columnId={id}
            title={title}
            cardId={cardId}
            cardIndex={cardIndex}
            handleResize={handleResize}
            taskEdit={taskEdit}
          />
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
};

export { Column };
