import PropTypes from 'prop-types';
import './MainLayout.scss';

const MainLayout = ({ children }) => <div className="layout">{children}</div>;

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export { MainLayout };
