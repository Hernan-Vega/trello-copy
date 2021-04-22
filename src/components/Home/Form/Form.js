/* eslint-disable jsx-a11y/no-autofocus */
import './Form.scss';
import icondelete from '../../../assets/icondelete.svg';
import iconplus from '../../../assets/iconplus.svg';

const Form = ({ isColumn, checker, onSubmit, handleChange, onClick }) => {
  return !checker ? (
    <button
      type="button"
      className={isColumn ? 'add-column' : 'add-card'}
      onClick={onClick}
    >
      <img src={iconplus} alt="add" />
      {isColumn ? `Add list` : `Add card`}
    </button>
  ) : (
    <form
      onSubmit={onSubmit}
      className={isColumn ? 'form-column' : 'form-card'}
    >
      <textarea
        type="text"
        placeholder={
          isColumn ? `Enter the list title...` : `Enter the task title...`
        }
        onChange={handleChange}
        autoFocus
      />
      <div className="buttons">
        <button type="submit" className="buttons__confirm">
          {isColumn ? `Add list` : `Add card`}
        </button>
        <button type="button" className="buttons__delete" onClick={onClick}>
          <img src={icondelete} alt="cancel" />
        </button>
      </div>
    </form>
  );
};

export { Form };
