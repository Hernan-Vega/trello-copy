import { Card } from '../Card/Card';
import './Column.scss';

const Column = ({ name, tareas }) => {
  return (
    <div className="column">
      <div className="column__top">
        <textarea className="column__top__name">{name}</textarea>
        <button type="button" className="column__top__delete">
          delete
        </button>
      </div>
      <ul>
        {tareas.map(({ title, cardid }) => (
          <Card title={title} id={cardid} />
        ))}
      </ul>
      <input type="button" value="+ add card" className="column__add-card" />
    </div>
  );
};

export { Column };
