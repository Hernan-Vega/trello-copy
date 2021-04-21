const Card = ({ title, id }) => {
  return (
    <li id={id}>
      <input type="text" value={title} />
    </li>
  );
};

export { Card };
