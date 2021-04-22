/* eslint-disable jsx-a11y/no-autofocus */
import './Form.scss';
import icondelete from '../../../assets/icondelete.svg';

const Form = ({ onSubmit, handleChange, handleClick }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <textarea
        type="text"
        placeholder="Enter the list title..."
        onChange={handleChange}
        autoFocus
      />
      <div className="form__buttons">
        <button type="submit" className="form__buttons__confirm">
          Add list
        </button>
        <button type="button" onClick={handleClick}>
          <img src={icondelete} alt="cancel" />
        </button>
      </div>
    </form>
  );
};

export { Form };
