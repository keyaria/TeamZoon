import { Flex,  FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
//  const { colorMode } = useColorMode()

  // const bgColor = {dark: 'gray.900',light: 'gray.900' }

  //const color = { dark: 'white', light: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="black"
      color="white"
      {...props}
    />
  )
}
