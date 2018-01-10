import React from 'react'
import {
  ThemeProvider,
  Box,
} from '@hackclub/design-system'
import { Head } from 'react-static'
import Nav from '../components/Nav'
import Start from '../components/Start'
import Footer from '../components/Footer'

export default () => (
  <ThemeProvider>
    <Head>
      <title>Philosophy – Hack Club</title>
    </Head>
      <Nav />
    <Start />
    <Footer />
  </ThemeProvider>
)
