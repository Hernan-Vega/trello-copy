import { Card } from '../Card/Card';
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
}) => {
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
        {cards.map(({ title, cardid }) => (
          <Card title={title} id={cardid} handleResize={handleResize} />
        ))}
      </ul>
      <div className="column__add-card">
        <img src={iconplus} alt="add" />
        <textarea onChange={handleResize}>Add card</textarea>
      </div>
    </div>
  );
};

export { Column };
