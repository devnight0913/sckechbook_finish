import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code-branch" /> Home
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/">AAA</Link>
        </li>

        <li>
          <Link to="/">BBB</Link>
        </li>

        <li>
          <Link to="/">CCC</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
