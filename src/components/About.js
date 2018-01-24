import React from 'react'
import {
  Flex as F,
  Box as B,
  Container,
  Section,
  Image as I,
  Text,
  mediaQueries,
  space,
  cx
} from '@hackclub/design-system'
import { wk } from '../theme'

const Box = B.extend`
  max-width: 32rem;
`
const Image = I.extend`
  max-width: 100vw;
  overflow: hidden;
  padding: ${space[2]}px;
  border-radius: 8px;
`
const Flex = Section.withComponent(F).extend`
  max-width: 100%;
  justify-content: center;
  flex-direction: column;
  ${mediaQueries[1]} {
    flex-direction: row;
  }
  align-items: baseline;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: ${cx('gray.1')};
    ${wk('clip-path: polygon(0% 0%, 100% 0, 100% 75%, 0 100%)')};
  }
`
const Chunk = props => (
  <Box align="center" mx={3} mb={[4, 0]}>
    <Text f={[3, 4]} color="black" align="left">
      <strong>{props.title}</strong> <Text.span color="slate">{props.message}</Text.span>
    </Text>
    {props.image && <Image src={props.image} />}
  </Box>
)
const Base = B.extend`
  margin-top: -12rem;
`

export default props => (
  <Base>
    <Image w={512} mx="auto" src="/about_hacking.jpg" />
    <Flex id="about" mb={[3, 6]} {...props}>
      <Chunk
        title="What it looks like."
        message="Every week, you and around 20
      other students come together to build. Meetings are like
      mini-hackathons. People are working on projects, you lead workshops to
      introduce new technologies, you and your co-leads are constantly
      mentoring. Your members start with no experience."
      />
      <Chunk
        title="How it works."
        message="You, a student who knows how to code,
      get 1 - 2 others to start a Hack Club. You apply, we accept you, you
      use the community’s open source materials and remote office hours with
      the staff to get your club started."
      />
      <Chunk
        title="Our philosophy."
        message="We think people learn best when they
      take control of their own education. At Hack Club, there are no
      teachers. No lectures. Your job is to facilitate and provide guidance
      through mentoring. Hack Club is heavily inspired by unschooling."
      />
    </Flex>
  </Base>
)
