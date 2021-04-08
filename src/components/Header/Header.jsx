import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink to="/" exact style={{marginRight: '10px'}} >Главная</NavLink>
      <NavLink to="/about" exact style={{marginRight: '10px'}} >О нас</NavLink>
      <NavLink to="/catalog" exact style={{marginRight: '10px'}} >Каталог</NavLink>
      <NavLink to="/contacts" exact style={{marginRight: '10px'}} >Контакты</NavLink>
    </div>

  );
}

