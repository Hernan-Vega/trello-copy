/* eslint-disable jsx-a11y/no-autofocus */
import './Form.scss';
import icondelete from '../../../assets/icondelete.svg';
import iconpluswhite from '../../../assets/iconpluswhite.svg';
import iconplusgray from '../../../assets/iconplusgray.svg';

const Form = ({ isColumn, checker, onSubmit, handleChange, onClick }) => {
  return !checker ? (
    <button
      type="button"
      className={isColumn ? 'add-column' : 'add-card'}
      onClick={onClick}
    >
      {isColumn ? (
        <img src={iconpluswhite} alt="add" />
      ) : (
        <img src={iconplusgray} alt="add" />
      )}
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
        className={isColumn ? `form-column__text` : `form-card__text`}
        onChange={handleChange}
        autoFocus
      />
      <div className={isColumn ? `form-column__buttons` : `form-card__buttons`}>
        <button
          type="submit"
          className={
            isColumn
              ? `form-column__buttons__confirm`
              : `form-card__buttons__confirm`
          }
        >
          {isColumn ? `Add list` : `Add card`}
        </button>
        <button
          type="button"
          onClick={onClick}
          className={
            isColumn
              ? `form-column__buttons__delete`
              : `form-card__buttons__delete`
          }
        >
          <img src={icondelete} alt="cancel" />
        </button>
      </div>
    </form>
  );
};

export { Form };
