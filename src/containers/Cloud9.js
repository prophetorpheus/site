import React from 'react'
import { ThemeProvider, Box, Heading, Section } from '@hackclub/design-system'
import { Head } from 'react-static'
import Nav from '../components/Nav'
import Cloud9Form from '../components/Cloud9Form'

const Header = Section.withComponent('header').extend`
  padding-top: 0 !important;
  background-color: ${props => props.theme.colors.blue[6]};
  background-image: linear-gradient(
    -8deg,
    ${props => props.theme.colors.indigo[4]} 0%,
    ${props => props.theme.colors.blue[6]} 50%,
    ${props => props.theme.colors.blue[7]} 100%
  );
`

export default () => (
  <ThemeProvider>
    <Head>
      <title>Cloud9 – Hack Club</title>
    </Head>
    <Header pb={4} align="center">
      <Nav />
      <Heading.h1 f={[5, 6]} mt={4} mb={2}>
        Let’s get you coding on Cloud9.
      </Heading.h1>
      <Heading f={[3, 4]}>
        Enter your email below and you’ll receive an invitation.
      </Heading>
    </Header>
    <Cloud9Form />
  </ThemeProvider>
)
