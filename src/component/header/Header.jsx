import "./header.css";


const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="" className="nav__logo">
            MyProfile
          </a>

          <div className="nav__munu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                Home
                </a>
              </li>

              <li className="nav__item">
                <a href="" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                  About Me
                </a>
              </li>

              <li className="nav__item">
                <a href="" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
