import { useEffect, useRef } from 'react';

import './Form.scss';
import icondelete from '../../../assets/icondelete.svg';
import iconpluswhite from '../../../assets/iconpluswhite.svg';
import iconplusgray from '../../../assets/iconplusgray.svg';

const Form = ({
  isColumn,
  isEdit,
  edittingCard,
  checker,
  onSubmit,
  handleChange,
  onClick,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, [checker]);

  const placeholder = () => {
    if (!isEdit) {
      return isColumn ? 'Enter the list title...' : `Enter the task title...`;
    }
    return null;
  };

  const buttonName = () => {
    if (isEdit) {
      return 'Confirm';
    }
    return isColumn ? 'Add list' : 'Add card';
  };

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
      <input
        type="text"
        ref={formRef}
        minLength="1"
        placeholder={placeholder()}
        className={isColumn ? `form-column__text` : `form-card__text`}
        onChange={handleChange}
        value={edittingCard}
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
          {buttonName()}
        </button>
        {!isEdit && (
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
        )}
      </div>
    </form>
  );
};

export { Form };
