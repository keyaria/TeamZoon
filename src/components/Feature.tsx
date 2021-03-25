import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import useTranslation from 'next-translate/useTranslation'

export default function S3c() {
  const {t} = useTranslation('common');

  const Feature = (props: any) => {
    return (
      <Box>
        <Icon
          boxSize={12}
          //color={useColorModeValue("brand.700")}
          color="white"
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          color="white"
        //  color={useColorModeValue("gray.100")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <AnimatePresence>
    <motion.div

    >
    <Flex

      p={[0, 20]}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg="gray.800"
        shadow="xl"
      >
        <Feature
          title={t('about.reason1.title')}
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          }
        >
        {t('about.reason1.caption')}
        </Feature>

        <Feature
          title={t('about.reason2.title')}
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          }
        >
        {t('about.reason2.caption')}
        </Feature>

        <Feature
          title={t('about.reason3.title')}
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          }
        >
        {t('about.reason3.caption')}
        </Feature>
      </SimpleGrid>
    </Flex>
    </motion.div>
    </AnimatePresence>
  );
}
