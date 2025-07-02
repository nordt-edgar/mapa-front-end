import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <ul className="flex justify-space-ar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/duda">Sobre a Duda</Link></li>
          <li><Link to="/podologia">Podologia</Link></li>
          <li><Link to="/estetica">Estética Avançada</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
