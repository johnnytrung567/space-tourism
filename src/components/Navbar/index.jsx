import { Logo, Nav, Menu, NavItem, Num, Line, Bars } from './Navbar'
import menuData from '../../Data/menuData'
import logo from '../../assets/shared/logo.svg'

const Navbar = ({ toggleSidebar }) => {
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
            <Bars onClick={toggleSidebar} />
        </Nav>
    )
}
export default Navbar
