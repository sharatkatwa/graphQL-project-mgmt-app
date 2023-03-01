import logo from './assets/logo.png'

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a href='/client' className='navbar-brand'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>SJProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Header
