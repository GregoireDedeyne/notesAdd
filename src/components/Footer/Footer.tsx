import { NavLink } from 'react-router-dom';
import './footer.scss';
export function Footer() {
  return (
    <div className="footer-countainer">
      <div className="footer">
        <NavLink className="link" to="/">
          {' '}
          Accueil{' '}
        </NavLink>
        <NavLink className="link" to="/FAQ">
          {' '}
          FAQ{' '}
        </NavLink>
      </div>
    </div>
  );
}
