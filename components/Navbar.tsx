import { ActiveLink } from "./ActiveLink";
import style from './../styles/Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar=()=>{
    return(
        <nav className={style.menu}>
            {(menuItems.map((items,index)=><ActiveLink href={items.href} text={items.text} key={index}/>))}
        </nav>
    )
}