import React from 'react'
import { Link } from 'react-static'
import {
  Avatar,
  Flex,
  Box,
  Heading,
  Text,
  LargeButton,
  mediaQueries
} from '@hackclub/design-system'
import { shuffle, range, sample } from 'lodash'

const Root = Flex.extend`
  position: relative;
  min-height: 32rem;
  max-height: 72rem;
  max-width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`

const Cloud = Box.extend`
  margin: auto;
  border-radius: 4rem;
  box-shadow: 0 0 2rem 4rem rgba(252, 252, 252, 0.95);
  background-color: rgba(252, 252, 252, 0.95);
  max-width: 40rem;
  text-align: center;
  position: relative;
  z-index: 2;
  @media (min-height: 24em) {
    box-sizing: content-box;
    border-radius: 8rem;
    box-shadow: 0 0 4rem 4rem rgba(252, 252, 252, 0.95);
    padding: 0 1rem;
    top: -2rem;
  }
  p:first-child {
    line-height: 1.125;
  }
  h1 {
    line-height: 1;
  }
  h2 {
    line-height: 1.25;
  }
`

LargeButton.link = LargeButton.withComponent(Link)

const Bubbles = ({ children }) => (
  <Root justify="center" align="flex-end" pt={3} px={[0, 3]}>
    <Cloud>
      <Heading.h1 f={[5, 6]} color="primary" mx="auto" mt={2} mb={3}>
        High school coding clubs.
      </Heading.h1>
      <Text f={[3, 4]} color="gray.9" mx="auto" m={0}>
        Hack Club is a nonprofit network of coding clubs where members learn to
        code like hackers – through tinkering, building projects, and taking
        things apart.
      </Text>
      <Flex justify="center" wrap mx={-2} mt={4}>
        <LargeButton href="https://finder.hackclub.com" inverted m={2}>
          Find a Club
        </LargeButton>
        <LargeButton.link to="/start" m={2}>
          Start a club »
        </LargeButton.link>
      </Flex>
    </Cloud>
  </Root>
)

export default Bubbles
