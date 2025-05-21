/**
 * NavSection
 *
 * @package organisms
 */
import style from './style.module.css';
import { Link } from 'react-router-dom';

/**
 * @returns {JSX.Element}
 */
export const NavSection = () => {
  return (
    <section className={style.navContainer}>
      <nav>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link to={'/'}>Top</Link>
          </li>
          <li className={style.li}>
            <Link to={'/create'}>Create</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
