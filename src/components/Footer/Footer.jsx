import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <span style={{marginRight: '10px'}}>Это подвал, детка</span>
      <NavLink to="/" exact style={{marginRight: '10px'}} >Главная</NavLink>
      <NavLink to="/about" exact style={{marginRight: '10px'}} >О нас</NavLink>
      <NavLink to="/catalog" exact style={{marginRight: '10px'}} >Каталог</NavLink>
      <NavLink to="/contacts" exact style={{marginRight: '10px'}} >Контакты</NavLink>
    </div>

  );
}