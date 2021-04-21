import { Column } from '../Column/Column';
import './ColumnList.scss';
import iconplus from '../../../assets/iconplus.svg';

/* eslint-disable no-param-reassign */

const ColumnList = () => {
  const titulos = [
    {
      name: 'Today',
      id: '1',
      tareas: [
        { title: 'Hacer la cama', cardid: '1' },
        { title: 'Sacar al perro', cardid: '2' },
      ],
    },
    {
      name: 'Tomorrow',
      id: '2',
      tareas: [
        { title: 'Hacer código', cardid: '1' },
        { title: 'Lavar la loza', cardid: '2' },
        {
          title:
            'Hacer caca una o dos veces, no olvidarse de hacerlo antes de salir a correr',
          cardid: '3',
        },
      ],
    },
  ];

  const handleChange = (event) => {
    event.target.style.height = '';
    event.target.style.height = `calc(${event.target.scrollHeight}px - 4px)`;
  };

  return (
    <ul className="column-list">
      {titulos.map(({ name, id, tareas }) => (
        <li id={id}>
          <Column name={name} tareas={tareas} handleChange={handleChange} />
        </li>
      ))}
      <li>
        <div className="column-list__add-list">
          <img src={iconplus} alt="add" />
          <textarea onChange={handleChange}>Add list</textarea>
        </div>
      </li>
    </ul>
  );
};

export { ColumnList };
