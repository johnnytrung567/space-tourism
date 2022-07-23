import Slider from 'react-slick'
import {
    Bio,
    Container,
    CrewWrap,
    Info,
    InfoRow,
    HeadingFive,
    Name,
    Wrapper,
} from './Crew'
import crewData from '../../Data/crewData'

const Crew = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Container>
            <Wrapper>
                <HeadingFive>
                    <span>02</span>
                    Meet your crew
                </HeadingFive>
                <Slider {...settings}>
                    {crewData.map((item, index) => (
                        <InfoRow key={index}>
                            <Info>
                                <h4>{crewData[index].role}</h4>
                                <Name>{crewData[index].name}</Name>
                                <Bio>{crewData[index].bio}</Bio>
                            </Info>
                            <CrewWrap>
                                <img src={crewData[index].images} alt='crew' />
                            </CrewWrap>
                        </InfoRow>
                    ))}
                </Slider>
            </Wrapper>
        </Container>
    )
}
export default Crew
