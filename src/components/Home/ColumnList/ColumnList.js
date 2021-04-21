import { Column } from '../Column/Column';
import './ColumnList.scss';

const ColumnList = () => {
  const titulos = [
    {
      name: 'today',
      id: '1',
      tareas: [
        { title: 'Hacer la cama', cardid: '1' },
        { title: 'Sacar al perro', cardid: '2' },
      ],
    },
    {
      name: 'tomorrow',
      id: '2',
      tareas: [
        { title: 'Hacer código', cardid: '1' },
        { title: 'Lavar la loza', cardid: '2' },
        { title: 'Hacer caca', cardid: '3' },
      ],
    },
    {
      name: 'vamos a ver si cuando es muy largo se hace coso pum...',
      id: '3',
      tareas: [
        { title: 'Hacer código', cardid: '1' },
        { title: 'Lavar la loza', cardid: '2' },
        { title: 'Hacer caca', cardid: '3' },
      ],
    },
  ];
  return (
    <ul className="column-list">
      {titulos.map(({ name, id, tareas }) => (
        <li id={id}>
          <Column name={name} tareas={tareas} />
        </li>
      ))}
    </ul>
  );
};

export { ColumnList };
