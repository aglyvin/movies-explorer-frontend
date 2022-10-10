
import { Promo } from "../Promo/Promo"
import { Header } from "../Header/Header"
import "./Main.css"

export function Main() {
  return (<main className="main">
    <Header />
    <Promo />
  </main>
  )
}