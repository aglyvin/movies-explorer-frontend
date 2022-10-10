import "./Header.css"
import logo from "../../images/logo.svg"

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
            <img src={logo} className="logo" alt="Логотип"/>
      </nav>
    </header>
  )
}