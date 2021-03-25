import { Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'


const Section = styled(Flex)`

  justify-content: center;
  align-Items: center;
  min-height: 100vh;

  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("/smartHome.jpg") ;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100% ;
`;


export const Hero = ({ title }: { title: string }) => (
  <Section justifyContent="center" alignItems="center" >
    <Heading fontSize="6vw">{title}</Heading>
  </Section>
)

Hero.defaultProps = {
  title: 'Let Technology \n serve your Life',
}
