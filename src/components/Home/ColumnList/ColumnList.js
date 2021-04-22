/* eslint-disable no-param-reassign */

import { useState } from 'react';
import { Column } from '../Column/Column';
import { Form } from '../Form/Form';
import './ColumnList.scss';
import iconplus from '../../../assets/iconplus.svg';

const ColumnList = () => {
  const [columns, setColumns] = useState([]);
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newList, setNewList] = useState('');
  const [showNewCardForm, setShowNewCardForm] = useState(0);

  const handleResize = (event) => {
    event.target.style.height = '';
    event.target.style.height = `calc(${event.target.scrollHeight}px - 4px)`;
  };

  const onClickNewColumn = () => {
    setShowNewListForm((prevState) => !prevState);
  };

  const handleNewListChange = (event) => {
    handleResize(event);

    const name = event.target.value;
    setNewList(name);
  };

  const onSubmitNewColumn = (event) => {
    event.preventDefault();

    const columnsId = columns.map(({ id }) => id);
    const newId = columns.length === 0 ? 1 : Math.max(...columnsId) + 1;

    setColumns([...columns, { name: newList, id: newId, cards: [] }]);
    setNewList('');
    onClickNewColumn();
  };

  const handleTitleChange = (event, titleId) => {
    handleResize(event);

    const newTitle = event.target.value;
    const copyColumns = [...columns];
    const index = copyColumns.findIndex(({ id }) => id === titleId);

    copyColumns[index].name = newTitle;
    setColumns([...copyColumns]);
  };

  const handleDeleteColumn = (buttonId) => {
    setColumns((prev) => prev.filter(({ id }) => id !== buttonId));
  };

  const onClickNewCard = (columnId) => {
    if (showNewCardForm !== columnId) {
      setShowNewCardForm(columnId);
    } else {
      setShowNewCardForm(0);
    }
  };

  const addNewCard = (card, columnId) => {
    const copyColumns = [...columns];
    const index = copyColumns.findIndex(({ id }) => id === columnId);
    const columnCard = copyColumns[index];

    let { cards } = columnCard;
    const cardsIdArray = cards.map(({ id }) => id);
    const newCardId =
      cardsIdArray.length === 0 ? 1 : Math.max(...cardsIdArray) + 1;
    cards = [...cards, { title: card, cardId: newCardId }];

    copyColumns[index].cards = cards;
    setColumns([...copyColumns]);
    onClickNewCard();
  };

  return (
    <ul className="column-list">
      {columns.map(({ name, id, cards }) => (
        <li key={id}>
          <Column
            name={name}
            id={id}
            cards={cards}
            handleResize={handleResize}
            handleTitleChange={handleTitleChange}
            handleDeleteColumn={handleDeleteColumn}
            onClickNewCard={onClickNewCard}
            showNewCardForm={showNewCardForm}
            addNewCard={addNewCard}
          />
        </li>
      ))}
      <li>
        {!showNewListForm ? (
          <button
            type="button"
            className="column-list__add-list"
            onClick={onClickNewColumn}
          >
            <img src={iconplus} alt="add" />
            Add list
          </button>
        ) : (
          <Form
            onSubmit={onSubmitNewColumn}
            handleChange={handleNewListChange}
            onClick={onClickNewColumn}
          />
        )}
      </li>
    </ul>
  );
};

export { ColumnList };
