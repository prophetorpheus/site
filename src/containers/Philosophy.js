import React from 'react'
import {
  ThemeProvider,
  Heading,
  Container,
  Flex,
  Box,
  Text,
  Section,
  LargeButton,
  Link as A,
  mediaQueries
} from '@hackclub/design-system'
import { Head } from 'react-static'
import { wk } from '../theme'
import Nav from '../components/Nav'
import Start from '../components/Start'
import Footer from '../components/Footer'

const One = Section.extend`
  padding-top: 0 !important;
  background-color: ${props => props.theme.colors.pink[5]};
  background-image: linear-gradient(
    16deg,
    ${props => props.theme.colors.pink[6]} 0%,
    ${props => props.theme.colors.pink[5]} 100%
  );
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 90%);
`
const Two = Section.extend`
  background-color: ${props => props.theme.colors.violet[8]};
  background-image: linear-gradient(
    32deg,
    ${props => props.theme.colors.violet[7]} 0%,
    ${props => props.theme.colors.violet[8]} 50%,
    ${props => props.theme.colors.indigo[9]} 100%
  );
  margin-top: -3rem;
  padding-top: 3rem;
`
const Three = Section.extend`
  background-color: ${props => props.theme.colors.cyan[5]};
  background-image: linear-gradient(
    48deg,
    ${props => props.theme.colors.cyan[4]} 0%,
    ${props => props.theme.colors.cyan[6]} 100%
  );
`

const HeadLine = Heading.h1.extend.attrs({ f: [5, 7, 8] })`
  line-height: 1.125 !important;
  text-transform: uppercase;
  ${mediaQueries[1]} {
    &:nth-of-type(2) {
      padding-left: 6rem;
    }
  }
  &:nth-of-type(3) {
    text-align: center;
  }
  &:nth-of-type(4) {
    text-align: right;
  }
`

export default () => (
  <ThemeProvider>
    <Head>
      <title>Philosophy – Hack Club</title>
      <style children="section{flex-direction:column}" />
    </Head>
    <One>
      <Nav />
      <Container w={1} maxWidth={57} color="white" align="left">
        <HeadLine children="Everyone" />
        <HeadLine children="learns best" />
        <HeadLine children="when they’re" />
        <HeadLine children="making." />
      </Container>
    </One>
    <Two>
      <Heading.h2>Coding is a superpower.</Heading.h2>
    </Two>
    <Three>
      <p />
    </Three>
    <Start />
    <Footer />
  </ThemeProvider>
)
