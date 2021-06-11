import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/filmes">Filmes</Link></li>
                <li><Link to="/cinemas">Cimemas</Link></li>
                <li><Link to="/sessoes">Sessões</Link></li>
                
            </ul>
        </nav>
    )
}
export default Header;