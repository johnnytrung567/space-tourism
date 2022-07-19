import { Circle, Container, HFive, LeftCol, Title, Wrapper } from './Home'

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <LeftCol>
                    <HFive>So, you want to travel to</HFive>
                    <Title mt='24px' mb='24px'>
                        Space
                    </Title>
                    <p>
                        Let's face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we'll give you a truly out of this world experience!
                    </p>
                </LeftCol>
                <Circle to='/destination'>Explore</Circle>
            </Wrapper>
        </Container>
    )
}
export default Home
