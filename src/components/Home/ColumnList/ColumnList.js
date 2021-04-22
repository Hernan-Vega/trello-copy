/* eslint-disable no-param-reassign */

import { useState } from 'react';
import { Column } from '../Column/Column';
import { Form } from '../Form/Form';
import './ColumnList.scss';

const ColumnList = () => {
  const [columns, setColumns] = useState([]);
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newList, setNewList] = useState('');

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

    const copyColumns = [...columns];
    const index = copyColumns.findIndex(({ id }) => id === titleId);

    const newTitle = event.target.value;
    copyColumns[index].name = newTitle;
    setColumns([...copyColumns]);
  };

  const handleDeleteColumn = (buttonId) => {
    setColumns((prev) => prev.filter(({ id }) => id !== buttonId));
  };

  const addNewCard = (newCards, columnIndex) => {
    const copyColumns = [...columns];
    const columnCard = copyColumns[columnIndex];

    columnCard.cards = newCards;
    setColumns([...copyColumns]);
  };

  return (
    <ul className="column-list">
      {columns.map(({ name, id, cards }, index) => (
        <li key={id}>
          <Column
            name={name}
            id={id}
            cards={cards}
            index={index}
            handleResize={handleResize}
            handleTitleChange={handleTitleChange}
            handleDeleteColumn={handleDeleteColumn}
            addNewCard={addNewCard}
          />
        </li>
      ))}
      <li>
        <Form
          isColumn
          checker={showNewListForm}
          onSubmit={onSubmitNewColumn}
          handleChange={handleNewListChange}
          onClick={onClickNewColumn}
        />
      </li>
    </ul>
  );
};

export { ColumnList };
