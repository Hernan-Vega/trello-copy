import './Cards.scss';
import iconedit from '../../../assets/iconedit.svg';
import icondelete from '../../../assets/icondelete.svg';

const Card = ({ title, id, handleChange }) => {
  return (
    <li id={id} className="card">
      <div className="card__text">
        <textarea disabled>{title}</textarea>
        <button type="button">
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
