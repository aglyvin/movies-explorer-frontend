import "./Header.css"
import logo from "../../images/logo.svg"
import Link from "../Link/Link"

export function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Логотип"/>
      <nav className="header__nav">
            
      </nav>
      <div className="header__profile">
        <Link title="Регистрация" url="/" mod=""/>
        <Link title="Войти" url="/" mod=""/>
      </div>
    </header>
  )
}