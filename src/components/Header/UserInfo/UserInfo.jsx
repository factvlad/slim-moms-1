import { NavLink } from 'react-router-dom';
import s from "./UserInfo.module.scss"

const UserInfo = () => {

  const activeNav = ({ isActive }) => {
    return isActive ? `${s.headerNavLink} ${s.active}` : s.headerNavLink;
  };

  return (
    <div className={ s.headerNavContainer }>
      <NavLink className={ activeNav } to="/diary">Diary</NavLink>
      <NavLink className={ activeNav } to="/calculator">Calculator</NavLink>
    </div>
  );
}

export default UserInfo;