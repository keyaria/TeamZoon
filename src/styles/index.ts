// @ts-nocheck
import styled from '@emotion/styled'
import {
  Flex,
  Box,
  Stack
} from '@chakra-ui/react';

import { Link } from 'react-scroll';

export const StickyList = styled(Stack)`

position: -webkit-sticky;
position: sticky;
top: 0;
padding: 20px;
margin-left: 20px;



`;

export const ParallaxBox = styled(Flex)`

min-height: 50%;
position: relative;
background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("/8-1.jpg") ;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
justify-content: flex-end;

`;

export const Diagonal = styled(Box)`
  width: 100vw;
  height: 700px;
  background-color: white;
  position: absolute;
  top: 300px;
  z-Index: 0;


`
export const Triangle = styled(Box)`
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  clip-path: polygon(0 0, 0% 100%, 100% 100%)
`
export const SideBarLinks = styled(Link)`

margin-right: 40px;
`;
export const ScrollFlex = styled(Flex)`
-webkit-transition: background-color 1000ms linear;
  -moz-transition: background-color 1000ms linear;
  -o-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;

background-color: ${(props) => props.current === 'section1' && '262727' || props.current === 'section2' && '#F7FAFC' || 'white' };

`;

export const SideBox = styled(Box)`

justify-content: center
align-items: center;


`;
export const OrList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items:left;
  flex-direction: column;
  font-size: 32px;
  margin-left: 32px;
  margin-top: 200px;
  font-weight: 600;


  & .title.selected {
   font-size: 64px;
 }
  ${props => {
    if(props.current === 'section1'){
      return `
       & .title.selected {
        color:white;
        border-right: solid white 2px;
      }
        color: gray
      `
    } else if(props.current === 'section2'){
      return `
     & .title.selected {
        color: black;
          border-right: solid black 2px;
      }
  color:gray


      `
    }else {
      return `
     & .title.selected {
        text-fill-color: black;
        border-right: solid green 2px;
      }
      background: linear-gradient(to left, #eee,  #92B874, #68B67E);

      text-fill-color: transparent;
      background-clip: text
      `

    }
  }}


`;

//   & > li  {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     user-select: none;
//   }
//
//   & .title {
//     font-size: 32px;
//     margin-left: 20px;
//     position: relative;
//     cursor: pointer;
//   }
//
//   & .title.selected {
//     font-size: 64px;
//     border-right: solid black 4px;
//     border-radius: 4px;
//   }
//
//   & .title.not0 {
//     color:gray;
//
//   }
//   & .title.not1 {
//     color:gray;
//   }
//
//   & .underline {
//   width: 20%;
//   height: 8px;
//   border-radius: 4px;
//   background: black;
//   position: absolute;
//   bottom: -4px;
// }
