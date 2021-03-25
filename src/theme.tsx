import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

//const fonts = { mono: `'Arial', arial` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})
const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "20px",

  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "12px",
      padding: "16px",
    },
    md: {
      fontSize: "14px",
      padding: "20px",
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {

      borderColor: "green.300",
      bgGradient: "linear(to-l, green.300, green.500)",
      bgClip: "text",
      _hover: {
        bgColor: "green.300",
        color: "white",


      }
    },
    solid: {
      bgGradient: "linear(to-r, green.300, green.500)" ,
      _hover: {
        bgGradient: "linear(to-r, green.400, green.600)",

      },
      color: "white",
    },

    careerButton: {
      border: "1px solid",
      borderColor: "green.600",
      color: "gray.200",
      bgGradient: {base: "", md: "linear(to-l, green.300, green.500)"},
      bgClip: {base: "null", md: "text"},
      _hover: {
        bgColor: "green.300",
        color: "white",

      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}



const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white"
      }
    }
  },
  colors: {
    black: '#16161D',
  },
  components: {
    Button,
  },
  textStyles: {
    gradient: {
      bgGradient: "linear(to-t, green.300, green.600)",
      bgClip: "text",
    }
  },
  fontSizes: {
    body: "Open Sans",
    heading: "Raleway"
  },
  breakpoints,
})

export default theme
