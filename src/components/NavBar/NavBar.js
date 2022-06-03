import { navBarOptions } from '../../helpers/stringmenu.js';

const NavBar = () => {
    return (
        <nav>
            <img src="https://flowit.es/webdesign/emporium/img/fitness-emporium.png" alt="emporium"></img>
            <ul>
                {navBarOptions.map(navBarOption => <li key={navBarOption.id}>{navBarOption.category }</li>)} 
            </ul>
        </nav>
    )
}

export default NavBar