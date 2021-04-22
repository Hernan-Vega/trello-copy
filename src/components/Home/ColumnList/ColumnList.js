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

  const handleResize = (event) => {
    event.target.style.height = '';
    event.target.style.height = `calc(${event.target.scrollHeight}px - 4px)`;
  };

  const handleClickNewColumn = () => {
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
    handleClickNewColumn();
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
          />
        </li>
      ))}
      <li>
        {!showNewListForm ? (
          <div className="column-list__add-list">
            <button type="button" onClick={handleClickNewColumn}>
              <img src={iconplus} alt="add" />
              Add list
            </button>
          </div>
        ) : (
          <Form
            onSubmit={onSubmitNewColumn}
            handleChange={handleNewListChange}
            onClick={handleClickNewColumn}
          />
        )}
      </li>
    </ul>
  );
};

export { ColumnList };
