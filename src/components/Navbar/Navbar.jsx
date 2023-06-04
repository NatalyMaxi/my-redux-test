import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <NavLink to='/posts' className={navData => navData.isActive ? classes.nav__link_active : classes.nav__link}>Post</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar;
