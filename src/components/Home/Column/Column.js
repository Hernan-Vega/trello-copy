import { useState } from 'react';
import { Card } from '../Card/Card';
import { Form } from '../Form/Form';
import './Column.scss';
import icondelete from '../../../assets/icondelete.svg';
import iconplus from '../../../assets/iconplus.svg';

const Column = ({
  name,
  id,
  cards,
  handleResize,
  handleTitleChange,
  handleDeleteColumn,
  onClickNewCard,
  showNewCardForm,
  addNewCard,
}) => {
  const [newCard, setNewCard] = useState('');

  const handleNewCardChange = (event) => {
    handleResize(event);

    const cardName = event.target.value;
    setNewCard(cardName);
  };

  const onSubmitNewCard = (event) => {
    event.preventDefault();

    addNewCard(newCard, id);
    setNewCard('');
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
        {cards.map(({ title, cardId }) => (
          <Card title={title} id={cardId} handleResize={handleResize} />
        ))}
      </ul>
      {showNewCardForm !== id ? (
        <div className="column__add-card">
          <button type="button" onClick={() => onClickNewCard(id)}>
            <img src={iconplus} alt="add" />
            Add card
          </button>
        </div>
      ) : (
        <Form
          onSubmit={onSubmitNewCard}
          handleChange={handleNewCardChange}
          onClick={onClickNewCard}
        />
      )}
    </div>
  );
};

export { Column };
