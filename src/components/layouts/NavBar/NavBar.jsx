import React from 'react'
import { ItemNavBar } from '../../ui/ItemNavBar/ItemNavBar'

export const NavBar = () => {
    const styles = {
        myNav: "",
        myUl: "flex justify-around gap-10",
    }
    const {myNav, myUl} = styles
  return (
    <nav className={myNav}>
        <ul className={myUl}>
            <ItemNavBar url="/habtec" text="Habilidades Técnicas"/>
            <ItemNavBar url="/habsoc" text="Habilidades Sociales"/>
            <ItemNavBar url="/expro" text="Experiencia Profesional"/>
            <ItemNavBar url="/est" text="Estudios"/>
        </ul>
    </nav>
  )
}
