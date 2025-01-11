import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gray-900 bg-opacity-90 z-50">
      <ul className="flex space-x-6 text-white">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            Anasayfa
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            Projeler
          </Link>
        </li>
        <li>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            Teknolojiler
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            Hakkımda
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
