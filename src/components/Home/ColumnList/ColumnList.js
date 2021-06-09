/* eslint-disable no-param-reassign */

import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { move, reorder } from 'utils/movement';
import { getListStyle } from 'utils/styles';
import { Column } from '../Column/Column';
import { Form } from '../Form/Form';

import './ColumnList.scss';

const ColumnList = () => {
  const [columns, setColumns] = useState([]);
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newList, setNewList] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(0);

  function handleResize(event) {
    event.target.style.height = '';
    event.target.style.height = `calc(${event.target.scrollHeight}px - 4px)`;
  }

  function onClickNewColumn() {
    setShowNewListForm((prevState) => !prevState);
  }

  const handleNewListChange = (event) => {
    handleResize(event);

    const name = event.target.value;
    setNewList(name);
  };

  function onSubmitNewColumn(event) {
    event.preventDefault();

    const columnsId = columns.map(({ id }) => id);
    const newId = columns.length === 0 ? 1 : Math.max(...columnsId) + 1;

    setColumns([...columns, { name: newList, id: newId, cards: [] }]);
    setNewList('');
    onClickNewColumn();
  }

  function handleTitleChange(event, titleId) {
    handleResize(event);

    const copyColumns = [...columns];
    const index = copyColumns.findIndex(({ id }) => id === titleId);

    const newTitle = event.target.value;
    copyColumns[index].name = newTitle;
    setColumns([...copyColumns]);
  }

  function handleDeleteColumn(buttonId) {
    setColumns(columns.filter(({ id }) => id !== buttonId));
  }

  function cardListHandler(newCards, columnIndex) {
    const copyColumns = [...columns];
    const columnCard = copyColumns[columnIndex];

    columnCard.cards = newCards;
    setColumns([...copyColumns]);
  }

  function showConfirmDelete(columnId) {
    if (columnId !== 0) {
      setConfirmDelete(columnId);
    } else {
      setConfirmDelete(0);
    }
  }

  function onDragEnd(result) {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    const state = columns.map(({ cards }) => cards);

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newColumns = [...columns];
      newColumns[sInd].cards = items;
      setColumns(newColumns);
    } else {
      const newResult = move(state[sInd], state[dInd], source, destination);
      const newColumns = [...columns];
      newColumns[sInd].cards = newResult[sInd];
      newColumns[dInd].cards = newResult[dInd];
      setColumns(newColumns);
    }
  }

  return (
    <div className="column-list">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(({ id, name, cards }, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <Droppable key={ind} droppableId={`${ind}`}>
            {(provided, snapshot) => (
              <Column
                cards={cards}
                name={name}
                id={id}
                index={ind}
                handleResize={handleResize}
                handleTitleChange={handleTitleChange}
                handleDeleteColumn={handleDeleteColumn}
                cardListHandler={cardListHandler}
                showConfirmDelete={showConfirmDelete}
                confirmDelete={confirmDelete}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              />
            )}
          </Droppable>
        ))}
      </DragDropContext>
      <Form
        isColumn
        checker={showNewListForm}
        onSubmit={onSubmitNewColumn}
        handleChange={handleNewListChange}
        onClick={onClickNewColumn}
      />
    </div>
  );
};

export { ColumnList };
