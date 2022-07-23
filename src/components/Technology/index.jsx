import { useEffect, useState } from 'react'
import {
    ButtonsWrap,
    Container,
    Desc,
    HeadingFive,
    ImageWrap,
    Info,
    InfoRow,
    InfoWrap,
    NumBtn,
    SmallText,
    Wrapper,
} from './Technology'
import technologyData from '../../Data/technologyData'

const Technology = () => {
    const [currentTech, setCurrentTech] = useState(0)
    const [windowWidth, setWindowWidth] = useState(undefined)
    const [isTablet, setTablet] = useState(false)

    const changeCurrentTech = id => setCurrentTech(id)

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
        handleWidth()

        return () => window.removeEventListener('resize', handleWidth)
    }, [])

    useEffect(() => {
        if (windowWidth <= 1070) setTablet(true)
        else setTablet(false)
    }, [windowWidth])

    return (
        <Container>
            <Wrapper>
                <HeadingFive>
                    <span>03</span>
                    Space launch 101
                </HeadingFive>
                <InfoRow>
                    <InfoWrap>
                        <ButtonsWrap>
                            {technologyData.map((item, index) => (
                                <NumBtn
                                    key={index}
                                    className={
                                        currentTech === index ? 'active' : ''
                                    }
                                    onClick={() => changeCurrentTech(index)}
                                >
                                    {index + 1}
                                </NumBtn>
                            ))}
                        </ButtonsWrap>
                        <Info>
                            <SmallText>The terminology...</SmallText>
                            <h3>{technologyData[currentTech].name}</h3>
                            <Desc>
                                {technologyData[currentTech].description}
                            </Desc>
                        </Info>
                    </InfoWrap>
                    <ImageWrap>
                        <img
                            src={
                                isTablet
                                    ? technologyData[currentTech].images
                                          .landscape
                                    : technologyData[currentTech].images
                                          .portrait
                            }
                            alt=''
                        />
                    </ImageWrap>
                </InfoRow>
            </Wrapper>
        </Container>
    )
}
export default Technology
