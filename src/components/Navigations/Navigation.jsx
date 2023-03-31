import style from "./Navigation.module.css"
import logo from "./../../assets/img/LoGo.png"
import { useState } from "react"
import { NavLink } from "react-router-dom"
function Navigation(props) {
    let [active, setActive] = useState(0)
    return (
        <div className="navigation">
            <div className={style.container}>
                <div className={style.content}>
                    <img src={logo} alt="" className={style.logo} />
                    <div className={style.navigation}>
                        <NavLink to="/hot">горячее</NavLink>
                        <NavLink to="/new">свежее</NavLink>
                        <NavLink to="/best">лучшее</NavLink>
                        <NavLink to="/subs">подписки</NavLink>
                        <NavLink to="/groops">сообщества</NavLink>
                    </div>
                    <div className={style.avtorise}>
                        <NavLink to="/register">регистрация</NavLink>
                        <NavLink to="/login">вход</NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navigation