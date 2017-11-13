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
import Flag from '../components/Flag'
import Icon from '../components/Icon'
import Footer from '../components/Footer'

const Base = Container.extend.attrs({
  mt: 5,
  py: 4,
  px: 3,
  maxWidth: 36 * 16
})``

const Header = Box.extend.attrs({
  pt: [5, 6],
  pb: [3, 5],
  px: 3,
  color: 'white',
  w: 1
})`
  ${geo(colors.primary)};
  text-align: center;
`

const Steps = Box.extend`
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
  p: 3
})`
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 50%;
    background-color: ${props => cx(props.theme)};
  }
  &:before { transform: skew(0deg, 10deg) translateX(-49.99%); }
  &:after { transform: skew(0deg,-10deg) translateX(50%); }

  &:first-child { top: 0; }

  ${mx[1]} {
    &:before, &:after { height: 50%; width: 100%; }
    &:before { transform: skew(-15deg,0deg) translateY(50%); }
    &:after { transform: skew(15deg,0deg) translateY(-50%); }
  }

  h3, p { color: ${colors.white}; }
`
const Step = ({ icon, name, desc, ...props }) => (
  <StepBox {...props}>
    <Icon name={icon} fill="white" size={48} />
    <Box mt={2}>
      <Subhead f={4} mb={1} children={name} />
      <Text f={3} children={desc} />
    </Box>
  </StepBox>
)

const Cards = Container.extend.attrs({ px: 3, mt: 3 })`
  display: grid;
  grid-gap: 1rem;
  text-align: left;

  ${mx[1]} {
    grid-template-columns: repeat(3, 1fr);
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
    <Flag />
    <Header>
      <Heading is="h1" f={6}>
        Let‘s start your club!
      </Heading>
      <Subhead is="h2" f={3} mt={3} caps>
        What you‘ll get
      </Subhead>
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
    </Header>
    <Steps>
      <Step
        theme="orange.5"
        icon="assignment"
        name="Apply"
        desc="Submit your application to get things rolling"
      />
      <Step
        theme="pink.5"
        icon="ring_volume"
        name="Train with us"
        desc="Talk and get tips from our team"
      />
      <Step
        theme="blue.5"
        icon="local_activity"
        name="Start your club"
        desc="This is the best part!"
      />
    </Steps>
    <Footer />
  </Provider>
)
