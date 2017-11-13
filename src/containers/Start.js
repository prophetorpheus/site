import React from 'react'
import {
  Provider,
  Heading,
  Lead,
  Container,
  Flex,
  Box,
  Text,
  Subhead
} from 'rebass'
import theme, { geo, colors, mx, cx } from '../theme'
import { Head, Link } from 'react-static'
import Nav from '../components/Nav'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Base = Container.extend.attrs({
  mt: 5,
  py: 4,
  px: 3,
  maxWidth: 36 * 16
})``

const Header = Box.extend.attrs({
  p: 3,
  color: 'white',
  w: 1
})`
  ${geo(colors.primary)};
  text-align: center;
`

const Steps = Box.extend.attrs({ mt: [0, 4] })`
  display: grid;
  grid-template-columns: 1fr;

  ${mx[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const StepBox = Flex.extend.attrs({
  direction: 'column',
  justify: 'center',
  my: 0,
  px: 3
})`
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 12rem;
    background-color: currentcolor;
  }
  &:before { transform: skew(0deg, 10deg) translateX(-49.99%); }
  &:after { transform: skew(0deg,-10deg) translateX(50%); }

  &:first-child { top: 0; }

  ${mx[1]} {
    &:before, &:after { height: 6rem; }
    &:before { transform: skew(-15deg,0deg) translateY(50%); }
    &:after { transform: skew(15deg,0deg) translateY(-50%); }
  }

  h3, p { color: ${colors.white}; }
  p { line-height: 1.5; }
`
const Step = ({ icon, name, desc, ...props }) => (
  <StepBox {...props}>
    <Icon name={icon} fill="white" size={36} />
    <Box mt={1}>
      <Subhead f={4} mb={1} children={name} />
      <Text f={2} children={desc} />
    </Box>
  </StepBox>
)

const Whys = Container.extend.attrs({ px: 3, py: 4 })`
  display: grid;
  grid-gap: 1rem;
  text-align: left;

  ${mx[1]} {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    border-radius: .25rem;
    border: 3px solid ${colors.primary};
  }
  p {
    line-height: 1.75;
  }
`
const Why = ({ name, desc, ...props }) => (
  <Box p={3} bg="white" {...props}>
    <Subhead color="black" mt={0} mb={1} f={3} children={name} />
    <Text color="steel" f={2} m={0} children={desc} />
  </Box>
)

const Cards = Container.extend.attrs({ maxWidth: 48 * 16, px: 3, mt: 3 })`
  display: grid;
  grid-gap: 1rem;
  text-align: left;

  ${mx[1]} {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    border-radius: .25rem;
    box-shadow: 0 2px 16px 2px rgba(0,0,0,.1);
  }
  p {
    line-height: 1.5;
  }
`
const Card = ({ name, desc, ...props }) => (
  <Box p={3} bg="white" {...props}>
    <Subhead color="black" mt={0} mb={1} f={3} children={name} />
    <Text color="slate" f={2} m={0} children={desc} />
  </Box>
)

export default () => (
  <Provider theme={theme}>
    <Head><title>Start – Hack Club</title></Head>
    <Header>
      <Nav />
      <Heading is="h1" f={6} mt={4}>
        Start your Hack Club
      </Heading>
      <Subhead is="h2" f={3} mt={3}>
        Your high school needs a creative space
      </Subhead>
      <CTA is={Link} to="/apply" bg="white" color="primary">Apply »</CTA>
    </Header>
    <Steps>
      <Step
        color="pink.5"
        icon="assignment"
        name="Submit your application"
        desc="Answer a few questions and get the ball rolling"
      />
      <Step
        color="green.5"
        icon="ring_volume"
        name="Train with us"
        desc="On a call we‘ll get to know you and get you going"
      />
      <Step
        color="blue.5"
        icon="local_activity"
        name="Lead your club"
        desc="This is the fun part! You‘ll begin planning, marketing, etc"
      />
    </Steps>
    <Heading f={4} color="primary" mt={4} center>
      Why start a coding club?
    </Heading>
    <Whys>
      <Why
        name="Coding is uniquely empowering."
        desc="When you’re coding, it doesn’t matter who you are—you can be a high schooler with a laptop making an app millions of people use."
      />
      <Why
        name="Hack Club isn’t just ”programming.”"
        desc="Computer science classes focus on programming principles, not making projects. Hack Club does things differently."
      />
    </Whys>
    <Cards>
      <Card
        name="Curriculum"
        desc="Workshops to get your members started making sites + apps + games"
      />
      <Card
        name="Assistance"
        desc="Chat with the community on Slack, or talk with a team member for help"
      />
      <Card
        name="Marketing"
        desc="Strategies, ideas, posters, stickers—whatever you need to get the word out"
      />
    </Cards>
    <Footer />
  </Provider>
)
