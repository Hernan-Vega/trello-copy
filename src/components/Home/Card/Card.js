import { useState } from 'react';
import './Cards.scss';
import iconedit from '../../../assets/iconedit.svg';
import icondelete from '../../../assets/icondelete.svg';

const Card = ({
  columnId,
  title,
  cardId,
  cardIndex,
  handleResize,
  taskEdit,
}) => {
  const [changeCard, setChangeCard] = useState(0);

  const handleCardChange = (id) => {
    if (changeCard !== id) {
      setChangeCard(id);
    } else {
      setChangeCard(0);
    }
  };

  const handleCardEdit = (event, id) => {
    handleResize(event);
    const newTitle = event.target.value;
    taskEdit(newTitle, id, cardIndex);
  };

  return (
    <li key={cardId}>
      <div className="card">
        <textarea
          disabled={changeCard !== cardId}
          onChange={(event) => handleCardEdit(event, columnId, cardId)}
        >
          {title}
        </textarea>
        <button type="button" onClick={() => handleCardChange(cardId)}>
          <img src={iconedit} alt="edit" />
        </button>
        <button type="button">
          <img src={icondelete} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export { Card };
