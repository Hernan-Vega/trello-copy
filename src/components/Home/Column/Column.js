import { Card } from '../Card/Card';
import './Column.scss';
import icondelete from '../../../assets/icondelete.svg';
import iconplus from '../../../assets/iconplus.svg';

const Column = ({ name, tareas, handleChange }) => {
  return (
    <div className="column">
      <div className="column__top">
        <textarea onChange={handleChange}>{name}</textarea>
        <button type="button">
          <img src={icondelete} alt="delete" />
        </button>
      </div>
      <ul className="column__cardlist">
        {tareas.map(({ title, cardid }) => (
          <Card title={title} id={cardid} handleChange={handleChange} />
        ))}
      </ul>
      <div className="column__add-card">
        <img src={iconplus} alt="add" />
        <textarea onChange={handleChange}>Add card</textarea>
      </div>
    </div>
  );
};

export { Column };
