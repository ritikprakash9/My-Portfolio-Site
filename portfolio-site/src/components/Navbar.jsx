import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li> <Link to = '/'>Home</Link> </li>
                    <li> <Link to = '/about'>About</Link> </li>
                    <li> <Link to = '/project'>Project</Link> </li>
                    <li> <Link to = '/blog'>Blog</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;