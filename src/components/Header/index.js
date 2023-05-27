// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <p className="link">
      <Link className="nav-link" to="/">
        Home
      </Link>
    </p>
    <p className="link">
      <Link className="nav-link" to="/about">
        About
      </Link>
    </p>
  </nav>
)

export default Header
