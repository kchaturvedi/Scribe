import Link from 'next/link'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light bg-light'>
    <div className='container'>
      <a className='navbar-brand' href='#'>Scribe</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Home</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
