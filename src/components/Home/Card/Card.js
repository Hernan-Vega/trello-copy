import { useState } from 'react';
import './Cards.scss';
import iconedit from '../../../assets/iconedit.svg';
import icondelete from '../../../assets/icondelete.svg';

const Card = ({ title, id, handleResize }) => {
  const [changeCard, setChangeCard] = useState(0);

  const handleCardChange = (cardId) => {
    if (changeCard !== cardId) {
      setChangeCard(cardId);
    } else {
      setChangeCard(0);
    }
  };

  return (
    <li id={id}>
      <div className="card">
        <textarea disabled>{title}</textarea>
        <button type="button" onClick={() => handleCardChange(id)}>
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
