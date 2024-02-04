import "/src/sass/header.sass"
import Popup from "reactjs-popup";
import {useState} from "react";
import {IoClose} from "react-icons/io5";
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {
    const [clickTriggerPopup, setClickTriggerPopup] = useState(false)
    const triggerPopup = () => (
        <div className={"navbar-brand"}>
            {clickTriggerPopup ?
                <a role={"button"} onClick={() => setClickTriggerPopup(!clickTriggerPopup)} className={"navbar-burger"}>
                    <IoClose size={30}/>
                </a> :
                <a role={"button"} onClick={() => setClickTriggerPopup(!clickTriggerPopup)} className={"navbar-burger"}>
                    <AiOutlineMenu size={30}/>
                </a>
            }
        </div>
    )
    return (
        <nav className={"navbar is-fixed-top"} role={"navigation"} aria-label={"main navigation"}>

            <Popup trigger={triggerPopup} contentStyle={{transition: "all 0.4s ease-out"}} arrow={false}
                   closeOnDocumentClick onClose={() => setClickTriggerPopup(!clickTriggerPopup)}>
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