import { SubHeadingTwo } from '../shared/Typography'
import {
    Container,
    DistanceRow,
    DistanceText,
    HeadingFive,
    Info,
    InfoItem,
    InfoMenu,
    InfoRow,
    Line,
    Planet,
    Title,
    Wrapper,
} from './Destination'
import destinationsData, { destinationsMenu } from '../../Data/destinationsData'
import { useState } from 'react'

const Destination = () => {
    const [currentDest, setCurrentDest] = useState(0)
    const changeCurrentDest = id => setCurrentDest(id)

    return (
        <Container>
            <Wrapper>
                <HeadingFive>
                    <span>01</span> Pick your destination{' '}
                </HeadingFive>
                <InfoRow>
                    <Planet>
                        <img
                            src={destinationsData[currentDest].images}
                            alt='moon'
                        />
                    </Planet>
                    <Info>
                        <InfoMenu>
                            {destinationsMenu.map(item => (
                                <InfoItem
                                    span='12px'
                                    spanMobile='8px'
                                    key={item.id}
                                    className={
                                        item.id === currentDest ? 'active' : ''
                                    }
                                    onClick={() => changeCurrentDest(item.id)}
                                >
                                    {item.title}
                                </InfoItem>
                            ))}
                        </InfoMenu>
                        <Title>{destinationsData[currentDest].name}</Title>
                        <p>{destinationsData[currentDest].description}</p>
                        <Line />
                        <DistanceRow>
                            <div>
                                <SubHeadingTwo>Avg. Distance</SubHeadingTwo>
                                <DistanceText>
                                    {destinationsData[currentDest].distance}
                                </DistanceText>
                            </div>
                            <div>
                                <SubHeadingTwo>Est. Travel time</SubHeadingTwo>
                                <DistanceText>
                                    {destinationsData[currentDest].travel}
                                </DistanceText>
                            </div>
                        </DistanceRow>
                    </Info>
                </InfoRow>
            </Wrapper>
        </Container>
    )
}
export default Destination
