import './Confirm.scss';

const Confirm = ({ id, name, onClickConfirm, onClickCancel }) => {
  return (
    <div className="confirm">
      <p>
        Do you want to delete the <span>{name}</span> column?
      </p>
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
