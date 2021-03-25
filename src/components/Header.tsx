import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  IconButton
} from '@chakra-ui/react'
import { MdLanguage } from "react-icons/md";
//import {useTranslation} from 'react-i18next';
import { useRouter } from 'next/router'
//import { i18n, withTranslation } from '../../i18n'
import Link from 'next/link'

const MenuItems = ({ children }: any) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props: any) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
//  const {i18n} = useTranslation();
  const router = useRouter()


  // borderBottom="1px"
  // borderBottomColor="gray.100"git
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={["1.75rem 2rem", "1.75rem 2rem", "1.75rem 4rem"]}
      position={props.positionRelative ? props.positionRelative : 'absolute'}
      width="100%"
      color="white"
      fontSize={["1rem", "1rem", "1rem", "1rem", "1.15rem"]}
    >
      <Flex align="center" mr={10} as="a" href="/">
      {
      /*  <Image
          width={["2rem", "2rem", "2.3rem"]}
          src="./feather-mark.svg"
          alt="Mark"
          mr={2}
        />
        */
      }

        <Heading as="h1" size="lg">
          TeamZoon
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle} w="auto">
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{base: "100%", md: "auto" }}
        alignItems="center"
        flexGrow={2}
        position="relative"
        w={{base: "100%", md: "auto"}}
        textAlign="right"
      >
        <MenuItems>
          <Link href="/">Products</Link>
        </MenuItems>
        <MenuItems>
          <Link href="/">About Us</Link>
        </MenuItems>
        <MenuItems>
          <Link href="/">Contact</Link>
        </MenuItems>
      </Box>

      <Box
        display={{base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
        textAlign="right"
        width={{base: "100%", md: "auto" }}
      >
      <IconButton
      aria-label="globe"
         size="lg"
         icon={<MdLanguage />}
         alt="Mark"
         mr={2}

         marginLeft="auto"
         variant="variant"
         onClick={() => {
         router.locale === 'jp' ? router.push(`${router.asPath}`, `${router.asPath}`, { locale: 'en-US' }) : router.push(`${router.asPath}`, `${router.asPath}`, { locale: 'jp' })
       }}
       />
      </Box>
    </Flex>
  );
};

//          onClick={/*() => i18n.changeLanguage(i18n.language === 'en' ? 'jp' : 'en')*/}
// {router.locales.map((locale) => (
//            <li key={locale}>
//              <Link href={router.asPath} locale={locale}>
//                <a>{locale}</a>
//              </Link>
//            </li>
//          ))}
export default Header;
