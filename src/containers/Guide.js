import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Head } from 'react-static'
import { ThemeProvider } from '@hackclub/design-system'

const test = '# this is a header\n\nAnd this is regular text'

export default () => (
  <ThemeProvider>
    <Head>
      <title>Guide</title>
    </Head>
    <ReactMarkdown source={test} />
  </ThemeProvider>
)
