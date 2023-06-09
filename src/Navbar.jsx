import eHealthLogo from "./statics/images/e-health logo blue 1.svg";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar">
        { /* first flex item */}
        <div className='navbar-container--1'>
          <img src={ eHealthLogo} className='navbar-logo' alt="this is our logo" />
        </div>

        { /* second flex item */}
        <div className='navbar-container--2'>
          <ul className="navbar-list">
            <li className='navbar-list__item'><a href="/" className="">Home</a></li>
            <li className='navbar-list__item'><a href="/" className="">About Us</a></li>
            <li className='navbar-list__item'><a href="/" className="">Forum</a></li>
            <li className='navbar-list__item'><a href="/" className="">Blog</a></li>
            <li className='navbar-list__item'><a href="/" className="">Products</a></li>
            <li className='navbar-list__item'><a href="/" className="">Contact Us</a></li>
          </ul>
        </div>

        { /* third flex item */}
        <div className='navbar-container--3'>
          <ul className="navbar-list--2">
            <li><a href='/' className='btn btn--login'>Login</a></li>
            <li><a href='/' className='btn btn--register'>Register</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;