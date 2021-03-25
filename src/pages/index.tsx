// @ts-nocheck
import {useState, useEffect, useRef, useCallback} from 'react';
import {
  Link as ChakraLink,
  Text,
  Code,
  OrderedList,
  List,
  ListIcon,
  ListItem,
  Flex,
  Box,
  Stack,
  Heading,
  Grid,
  GridItems,
  Image,
  Button,
  ScaleFade,
  forwardRef
} from '@chakra-ui/react';

import { StickyList, ParallaxBox, Diagonal, Triangle, SideBarLinks, ScrollFlex, SideBox, OrList} from '../styles/index.ts';

import PropTypes from 'prop-types'

import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { jsx, css } from '@emotion/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import  Header  from '../components/Header'
import ContactForm from '../components/ContactForm'
import styled from '@emotion/styled'
import { motion, AnimateSharedLayout, isValidMotionProp } from "framer-motion";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import S3c from '../components/Feature'
import { InView, useInView } from 'react-intersection-observer';
import useTranslation from 'next-translate/useTranslation'

import { Link } from 'react-scroll';

const Index = () => {
//const {t} = useTranslation();
const { t, lang } = useTranslation('common');

const [elementTop, setElementTop] = useState(0);
const ref = useRef();
const section2Ref = useRef();
const section3Ref = useRef();
const [width, setWidth] = useState(769);
function handleWindowSizeChange() {
  setWidth(window.innerWidth);
}

useEffect(() => {
  if (typeof window !== "undefined") {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
}


}, []);

let isMobile = width <= 768;
// const [ firstRef: ref, firstinView: inView, entry ] = useInView()
//  const [inViewRef, inView] = useInView();
    //const [inViewRef2, inView2, entry] = useInView();
const [offset, setOffset] = useState(0);
const [isCurrent, setIsCurrent] = useState("section1");
const [selected, setSelected] = useState(0);



const [elementPosition, setElementPosition] = useState({ x: 20, y: 150 })
const elementRef = useRef()

  // Element scroll position
useScrollPosition(
  ({ currPos }) => {

    setElementPosition(currPos)
  }, [], ref
)


// background-color: ${(props) => props.current === 'section1' && 'red' || 'blue' }

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

const handleClick = (ref) => {

  console.log('erwrfe', ref)

setIsCurrent(ref.current.id)

console.log(isCurrent)
}

// Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
// const setRefs = useCallback(
//   (node) => {
//     // Ref's from useRef needs to have the node assigned to `current`
//     ref.current = node;
//     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
//     inViewRef(node);
//   },
//   [inViewRef],
// );
//console.log('isCurrent', isCurrent);
const anchorScreens  = [
  {
    id: "section1",
    title: t('anchorSection.section1.title'),
    color: "#22cc88",
    spy: "true"

  },
  {
    id: "section2",
    title: t('anchorSection.section2.title'),
    color: "black",
    spy:"true"

  },
  {
    id: "section3",
    title: t('anchorSection.section3.title'),
    color: "#ff0055",
    spy:"true"

  }
];
const MotionLink = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Link ref={ref} {...chakraProps} />
  }),
)

  return(
  <motion.div  initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}>
  <Header />
  <Hero title={t('hero')}/>


  <Container>

{/*
    <Main  color="white">

      <Text>
        Team Zoon <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>typescript</Code>.
      </Text>

      <List spacing={3} my={0} >
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>


    </Main>*/}
    <Box w="100vw"  px={[0, "50px"]}>
<S3c/>


    </Box>
    <motion.div ref={elementRef} >

    <ScrollFlex  w="100vw" position= "sticky"  current={isCurrent}>
{!isMobile && ( <SideBox w="70%" >

  <StickyList >
  <AnimateSharedLayout>
  <OrList style={{ transform: "translateY(0)" }} current={isCurrent}>
    {anchorScreens.map(({id, title, color, spy}, i) => (
      <Link
      to={id}
      spy
      smooth={true}
      duration={1000}
      >
      <motion.li
      animate
        key={i}
        className={`title ${id === isCurrent && "selected" }`}
              transition={spring}

         >

         {title}
         {id === isCurrent && (
    <motion.div
      animate={{ backgroundColor: color }}
      transition={spring}
      layoutId="underline"
      className="underline"
    />
  )}
         </motion.li>

        </Link>
    ) )}
    </OrList>
    </AnimateSharedLayout>

{/*
    <Heading><SideBarLinks current={isCurrent}　activeClass="active" to="section1" spy={true} smooth={true} duration={1000} >Smart Home Solutions</SideBarLinks></Heading>


      <Heading><SideBarLinks current={isCurrent}　activeClass="active2" to="section2" spy={true} smooth={true} duration={1000}> Smart Store Management </SideBarLinks></Heading>


    <Heading> <SideBarLinks onClick={() =>
      handleClick(section3Ref)
    } activeClass="active3" to="section3" spy={true} smooth={true} duration={1000}>Application Development</SideBarLinks> </Heading>
*/}
  </StickyList>
</SideBox>
)}
<Box>
  <InView as={Flex} h="100vh"  id="section1"  color="white" flexDirection="column" onChange={(inView, entry) => inView && setIsCurrent('section1')} threshold=".80"　>
  <Box position="relative" backgroundImage="url('/7-2.jpg')"   bgPosition="center" bgRepeat="no-repeat" backgroundSize="cover" w={["100%","60%"]} h="80%" bgColor="gray.200" ml="auto">
  <ScaleFade initialScale={0.9} in={isCurrent==="section1"}>

    <Box w="400px" h="220px" left={["0","-200px"]} top="100px" position="absolute" bgColor="black" fontWeight="light" lineHeight="8" >
      <Text color="gray.200">{t('anchorSection.section1.details')}
      </Text>
    </Box>
 </ScaleFade>

  </Box>

  </InView>



<InView as={Flex}  minHeight="100vh" ref={section2Ref} id="section2" onChange={(inView, entry) => inView && setIsCurrent('section2')} threshold=".40" flexDirection="column" mx="50px">

<Box maxWidth="530px" lineHeight="2.3" mb="12">
<Heading color="black" fontSize="5xl" pb="4">{t("anchorSection.section2.details.title1")}</Heading>
  <Text color="gray.500" fontWeight="500" fontSize="lg" letterSpacing="widest" >
  {t("anchorSection.section2.details.caption")}
  </Text >

</Box>
<Flex color="black"  flexDirection="row" mb="12">
<Heading pr="4" >{t("anchorSection.section2.details.title2")}</Heading>

      <OrderedList spacing="4"  color="gray.500">
        <ListItem>{t("anchorSection.section2.details.list.item1")}</ListItem>
        <ListItem>{t("anchorSection.section2.details.list.item2")}</ListItem>
        <ListItem>{t("anchorSection.section2.details.list.item3")}</ListItem>
        <ListItem>{t("anchorSection.section2.details.list.item4")}</ListItem>
      </OrderedList>

</Flex>
<Box>
  <Text color="gray.500" lineHeight="2.3" fontWeight="600" maxWidth="600px">
  {t("anchorSection.section2.details.ending")}
  </Text >

</Box>
</InView>

<InView as={Flex} minHeight="100vh" mt="36px"  ref={section3Ref} id="section3"  onChange={(inView, entry) => inView  && setIsCurrent('section3')} threshold=".80" mx="50px">
  <Image src="/phone.png" height="400px"/>

  <Box color="black" w="300px">
  <Heading>  {t('anchorSection.section3.title')}</Heading>
    <Text> {t('anchorSection.section3.details')} </Text>

  </Box>
</InView>
</Box>
</ScrollFlex>
<Box h="1000px" w="100%" bgColor="white" pt="36px" position="relative">

<ParallaxBox  zIndex="2">
<Flex  w="400px" h="200px"p="10" bgColor="white" position="absolute" ml="auto" zIndex="2" justifyContent="center" alignItems="center">

<Heading color="black" fontSize="xl" lineHeight="2.1">
  {t("lowerbanner")}
</Heading>


</Flex>
</ParallaxBox>
<Diagonal>
  <Triangle  bgGradient="linear(to-r, green.300, green.500)">
  </Triangle>
</Diagonal>
</Box>
<Flex  mt="26px"  flexDirection="column" justifyContent="center" alignItems="center" my="100" position="relative"  >
<Heading>{t('career.section4.header')}</Heading>

    <ContactForm  />



  </Flex>
</motion.div>

    {/* <DarkModeSwitch /> */}

  </Container>
      <Footer />
  </motion.div>

)
  };


export default Index;

// Index.getInitialProps = async () => ({
// 	namespacesRequired: ['common'],
// });
//
// Index.propTypes = {
// 	t: PropTypes.func.isRequired
// };
