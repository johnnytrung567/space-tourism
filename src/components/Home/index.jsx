import { Circle, Inner, LeftCol, Title, Wrapper } from './Home'

const Home = () => {
    return (
        <Wrapper>
            <Inner>
                <LeftCol>
                    <h5>So, you want to travel to</h5>
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
            </Inner>
        </Wrapper>
    )
}
export default Home
