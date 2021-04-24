import './Confirm.scss';

const Confirm = ({ isColumn, id, onClickConfirm, onClickCancel }) => {
  return (
    <div className="confirm">
      <span>
        {isColumn
          ? `Do you want to delete this list?`
          : `Do you want to delete this task?`}
      </span>
      <div className="confirm__buttons">
        <button
          type="button"
          className="confirm__buttons__yes"
          onClick={() => onClickConfirm(id)}
        >
          Yes
        </button>
        <button
          type="button"
          className="confirm__buttons__cancel"
          onClick={onClickCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export { Confirm };
