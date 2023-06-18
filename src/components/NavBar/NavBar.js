import { navBarOptions } from '../../helpers/stringmenu.js';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.js';

const NavBar = () => {
    return (
        <nav>
            <Link to={'/'}>
            <img src="https://flowit.es/webdesign/emporium/img/fitness-emporium.png" alt="emporium" className="LogoPrimary"></img>
            </Link>
            <div className='categories'>
                {navBarOptions.map(navBarOption => <NavLink to={`category/${navBarOption.category}`} key={navBarOption.id} className={({ isActive }) => isActive ? 'ActiveCategory' : '' } >{navBarOption.category }</NavLink>)} 
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar