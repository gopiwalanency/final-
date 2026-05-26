import { navLinks } from '../data/portfolioData'

function Header({ activePath, onNavigate }) {
  const isActiveLink = (href) => {
    if (href === '/projects') {
      return activePath.startsWith('/projects')
    }

    return activePath === href
  }

  const handleNavigate = (event, href) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        aria-label="Param Patel home"
        onClick={(event) => handleNavigate(event, '/')}
      >
        Param Patel
      </a>
      <nav aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            aria-current={isActiveLink(link.href) ? 'page' : undefined}
            href={link.href}
            key={link.href}
            onClick={(event) => handleNavigate(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
