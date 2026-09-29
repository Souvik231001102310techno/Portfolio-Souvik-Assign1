import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const links = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span>&lt;</span>SR<span>/&gt;</span>
      </a>

      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        ☰
      </button>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenu(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;