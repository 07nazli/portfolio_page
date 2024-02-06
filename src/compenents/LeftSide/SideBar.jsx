import { FaHome } from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import { IoBag } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";
import './SideBar.scss';

export default function SideBar() {
    return ( 
    <header className='side-bar'>

        <div className='side-bar__logo'>
            <a href="https://www.linkedin.com/in/esmanazli007/">EsmaNazlı</a>
        </div>

        <nav className='side-bar__menu'>
            <ul className='side-bar__menu__list'>
                <li className='side-bar__menu__list__item'>
                    <FaHome />
                    <a href="#">Home</a>
                </li>
                <li className='side-bar__menu__list__item'>
                    <BsFillPersonFill />
                    <a href="#">About</a>
                </li>
                <li className='side-bar__menu__list__item'>
                    <TiThList />
                    <a href="#">Service</a>
                </li>
                <li className='side-bar__menu__list__item'>
                    <IoBag />
                    <a href="#">Portfolio</a>
                </li>
                <li className='side-bar__menu__list__item'>
                    <TbMessageCircle2Filled />
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>

    </header>
    );
  }
