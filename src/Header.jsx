import "/src/sass/header.sass"
import Popup from "reactjs-popup";
import {useEffect, useRef, useState} from "react";
import {IoClose} from "react-icons/io5";
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {
    const checkbox = useRef()
    const [clickTriggerPopup, setClickTriggerPopup] = useState(false)
    useEffect(() => {
        if(!clickTriggerPopup) {
            checkbox.current.checked = false
        }
    }, [clickTriggerPopup]);
    return (
        <nav className={"navbar is-fixed-top"} role={"navigation"} aria-label={"main navigation"}>
            <div className={"navbar-brand"}>
                <label className="hamburger navbar-burger">
                    <input ref={checkbox} type="checkbox" onClick={() => setClickTriggerPopup(true)}/>
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom"
                              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
            <Popup open={clickTriggerPopup} contentStyle={{transition: "all 0.4s ease-out"}} arrow={false}
                   closeOnDocumentClick onClose={() => setClickTriggerPopup(false)}>
                <aside className={"popup menu"}>
                    <p className={"menu-label"}>Social</p>
                    <ul className={"menu-list"}>
                        <li><a>Facebook</a></li>
                        <li><a>X</a></li>
                        <li><a>Discord</a></li>
                        <li><a>Tiktok</a></li>
                    </ul>
                    <p className={"menu-label"}>Sharing</p>
                    <ul className={"menu-list"}>
                        <li><a>Blogs</a></li>
                        <li><a>Discord</a></li>
                    </ul>
                </aside>
            </Popup>

            <div className={"navbar-menu"}>
                <div className={"navbar-start ml-2"}>
                    <span className={"navbar-item logo"}>Logo</span>
                    <a className={"navbar-item"}>Facebook</a>
                    <a className={"navbar-item"}>X</a>
                    <a className={"navbar-item"}>Tiktok</a>
                    <a className={"navbar-item"}>Discord</a>
                    <div className={"navbar-item has-dropdown is-hoverable"}>
                        <a className={"navbar-link"}>More</a>
                        <div className={"navbar-dropdown is-boxed "}>
                            <a className={"navbar-item"}>
                                My Blog
                            </a>
                            <a className={"navbar-item"}>My Discord Server</a>
                        </div>
                    </div>
                </div>
                <div className={"navbar-end"}>

                </div>
            </div>
        </nav>
    )
}
export default Header