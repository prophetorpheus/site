import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import tocbot from 'tocbot'
import { api } from '../../data'
import fetch from 'unfetch'
import { Head } from 'react-static'
import { ThemeProvider, Container, Box } from '@hackclub/design-system'
import LoadingAnimation from '../components/LoadingAnimation'

const tocbotStyles = `
.toc{overflow-y:auto}.toc>ul{overflow:hidden;position:relative}.toc>ul li{list-style:none}.toc-list{margin:0;padding-left:10px}a.toc-link{color:currentColor;height:100%}.is-collapsible{max-height:1000px;overflow:hidden;transition:all 300ms ease-in-out}.is-collapsed{max-height:0}.is-position-fixed{position:fixed !important;top:0}.is-active-link{font-weight:700}.toc-link::before{background-color:#EEE;content:' ';display:inline-block;height:inherit;left:0;margin-top:-1px;position:absolute;width:2px}.is-active-link::before{background-color:#54BC4B}
`

const tocbotOptions = {
  headingSelector: 'h2, h3, h4, h5, h6',
  positionFixedSelector: '.js-toc',
  fixedSidebarOffset: 'auto'
}

const MarkdownHeading = props => {
  const text = props.children.join('')
  const slug = text
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^a-z-]/g, '')

  return React.createElement(`h${props.level}`, {id: slug}, props.children)
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'loading',
      source: null
    }
  }

  componentWillMount() {
    fetch(`${api}/v1/repo/clubs/README.md`, {method: 'GET'})
      .then(resp => resp.text())
      .then(markdown => {
        this.setState({
          source: markdown,
          status: 'success'
        })
        tocbot.init(tocbotOptions)
      })
      .catch(e => {this.setState({status: 'error'})})
  }

  render() {
    const { status, source } = this.state
    switch(status) {
      case "loading":
        return <LoadingAnimation />
      case "success":
        return (
          <ThemeProvider>
            <Head>
              <title>Guide</title>
            </Head>
            <style dangerouslySetInnerHTML={{__html: tocbotStyles}} />
            <div className="js-toc" />
            <Container className="js-toc-content">
              <ReactMarkdown source={source} renderers={{heading: MarkdownHeading}} />
            </Container>
          </ThemeProvider>
        )
      /* case "error":*/
      default:
        return (<p>Something has gone terribly wrong... (status = '{status}')</p>)
    }
  }
}
