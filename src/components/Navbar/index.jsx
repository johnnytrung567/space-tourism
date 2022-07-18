import { Logo, Nav, Menu, NavItem, Num, Line } from './Navbar'
import menuData from '../../Data/menuData'
import logo from '../../assets/shared/logo.svg'

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>
                <img src={logo} alt='Logo' />
            </Logo>
            <Line />
            <Menu>
                {menuData.map((item, index) => (
                    <NavItem to={item.link} key={index} span='35px'>
                        <Num>{`0${index}`}</Num>
                        {item.title}
                    </NavItem>
                ))}
            </Menu>
        </Nav>
    )
}
export default Navbar
