import { NavLink } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
const Nav = () => {
  return (
   <nav>
     <div className="container">
      <div className='nav'>
      <h2 className='h2'>NEWS |<span className='nav_logo-span'> time</span></h2>
      <ul>
      <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/news'>news</NavLink></li>
      </ul>
    </div>
    </div>
   </nav>
  )
}

export default Nav
