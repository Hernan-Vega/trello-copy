export const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
});

export const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  height: 'fit-content',
});
