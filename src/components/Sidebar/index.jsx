import { CloseIcon, Num, SideItem, SideMenu, Wrapper } from './Sidebar'
import menuData from '../../Data/menuData'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Wrapper isOpen={isOpen}>
            <CloseIcon onClick={toggle} />
            <SideMenu>
                {menuData.map((item, index) => (
                    <SideItem to={item.link} key={index} onClick={toggle}>
                        <Num>{`0${index}`}</Num>
                        {item.title}
                    </SideItem>
                ))}
            </SideMenu>
        </Wrapper>
    )
}
export default Sidebar
