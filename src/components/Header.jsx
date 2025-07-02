function Header() {
  return (
    <header className="header">
      <div className="container flex justify-space-bw">
        <div id="header-logo">
          <img src="/mapa-front-end/images/logo.png" alt="Logo Duda Arte" width="80" />
        </div>
        <div id="header-frase" className="alinhamento-texto">
          <h3>Desenvolvido por Edgar Nordt</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
