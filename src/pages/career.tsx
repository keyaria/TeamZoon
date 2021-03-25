// @ts-nocheck
import  Header  from '../components/Header'
import  ContactForm  from '../components/ContactForm'
import  CareerOpportunities  from '../components/CareerOpportunities'
import { Box, Flex, Container, GridItem, Grid, Image, Text, Heading, ListItem, OrderedList, Button} from "@chakra-ui/react"
import styled from '@emotion/styled'
import { Footer } from '../components/Footer'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import { createBreakpoints, whiten } from "@chakra-ui/theme-tools"
import useTranslation from 'next-translate/useTranslation'
import { useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

const BigBox = styled(Flex)`
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color: white;
  position: relative;

`;

const Diagonal = styled(Box)`
  width: 100%;
  height: 300px;
  background: #16161D;
  position: relative;
`

const Triangle = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip-path: polygon(100% 100%, 0 100%, 100% 0)
`

const OfficeImage = styled(Image)`
  height: 254px;
  z-index: 10;
  object-fit: cover;
`

const ListParent = styled(OrderedList)`
  list-style-type: none;
  counter-reset: item;
  margin: 0;
  padding: 0;
`

const ListChild = styled(ListItem)`
  li&:before {
    counter-increment: item;
    content: '0' counter(item);
    position: relative;
    top: 25px;
    right: 15px;
    background-clip: text;
    background: linear-gradient(#68d391, #38A169)
    text-fill-color: transparent;
  }
`

export default function Career() {

  const { t, lang } = useTranslation('common')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const members = [
    {name: t('career.section2.name.paul'), title: t('career.title.ceo') },
    {name: t('career.section2.name.ayumi'), title: t('career.title.generalAffairsManager') },
    {name: t('career.section2.name.keyaria'), title: t('career.title.developer') },
    {name: t('career.section2.name.winston'), title: t('career.title.pm') },
    {name: t('career.section2.name.hiromu'), title: t('career.title.developer') },
    {name: t('career.section2.name.yusaku'), title: t('career.title.sr') },
  ]

  const cultures = [
    {title: t('career.section1.about1'), caption:t('career.section1.caption1')},
    {title: t('career.section1.about2'), caption:t('career.section1.caption2')},
    {title: t('career.section1.about3'), caption:t('career.section1.caption3')},
    {title: t('career.section1.about4'), caption:t('career.section1.caption4')},
  ]

  return (

  <div>
    <Header positionRelative/>
    <BigBox top={{md: "100"}}>
      <Box bg="#16161D">
        <Container p="0" maxW="100%" centerContent position="relative">
          <Heading fontSize="80px" bgClip={{base: "none",md: "text"}} bgGradient={{md: "linear(to-l, green.300, green.500)"}} position={{base: "absolute", md: "static"}} zIndex="99" top="60px" textShadow={{base: "1px 1px 3px #373837", md: "none"}}>{t('career.section1.header')}</Heading>
          <OfficeImage src="office.png" w={{base: "100%", md: "50%"}} position="relative" top={{base: "0", md: "50px"}} />
          <Box bg={{base: "#16161D", md: "white"}} position={{base: "static", md: "relative"}} top="-80px" pt={{base: "20px", md: "200px"}} px="50px" maxW={{base: "100%", md: "70%"}} h="100%">
            <Heading bgClip="text" bgGradient={{base: "linear(to-l, green.300, green.500)", md: "linear(to-l, black, black)"}} fontSize="2xl" textAlign="center" mb="10">{t('career.section1.title')}</Heading>
            <ListParent h={{base: "100%", md: "600px", lg: "500px" }} >
              <Flex h="100%" display={{base: "block", md: "flex"}} flexDirection="column" flexWrap="wrap" justifyContent="space-between">
                {cultures.map((culture) => {
                return(
                  <ListChild w={{base: "100%", md: "40%"}} h="50%" pb="20px">
                    <Text bgClip="text" bgGradient={{base: "linear(to-l, green.300, green.500)", md: "linear(to-l, black, black)"}} pb="20px" pl="20px">{culture.title}</Text>
                    <Text fontSize="sm" color={{base: "white", md: "black"}} pl="20px">{culture.caption}</Text>
                  </ListChild>
                )
                })}
              </Flex>
            </ListParent>
          </Box>
        </Container>
      </Box>

      <Box bg="#16161D" h={{base: "700px", md: "200px"}} w="100%">
      </Box>

      <Diagonal>
        <Triangle bgGradient={{base: "linear(to-l, green.300, green.500)", md: "linear(to-l, white, white)"}}>
        </Triangle>
      </Diagonal>
      <Box w="100%" bgGradient={{base: "linear(to-l, green.300, green.500)", md: "linear(to-l, white, white)"}}>
        <Grid
          h="100%"
          w="100%"
          templateRows={{base: "repeat(7, 1fr)", md: "repeat(3, 1fr)"}}
          templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}}
          gap={4}
          maxW="70%"
          mx="auto"
          position="relative"
          top={{base: "-1000px", md: "-600px"}}
        >
          <GridItem colSpan={{base: 1, md: 3}} m="auto">
            <Heading textStyle
            ="gradient" fontSize="60px"textAlign="center">{t('career.section2.header')}</Heading>
          </GridItem>
          {members.map((member, n) => {
          return(
          <GridItem m="auto" mb="100px">
            <Flex bg="green.300" w="200px" h="210px" borderRadius="50%" alignItems="center">
              <Avatar name={member.name} src="https://bit.ly/broken-link" width="200px" height="200px" borderRadius="50%"/>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
              <Text color={{base: "#c8ff9c", md: "black"}}>{member.name}</Text>
              <Text color={{base: "white", md: "gray.400"}}>{member.title}</Text>
            </Flex>
          </GridItem>
          )
          })}
        </Grid>

        <CareerOpportunities />

        <Flex flexDirection="column" justifyContent="center" alignItems="center" my="100" position="relative" color="black" top={{base: "-800px", md: "-400px"}}>
          <Heading>{t('career.section4.header')}</Heading>

              <ContactForm />


        </Flex>
      </Box>

    </BigBox>
    <Footer position="relative"/>
  </div>
  )
}
