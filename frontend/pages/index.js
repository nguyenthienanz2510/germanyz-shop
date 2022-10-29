import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b`,
  ],
}

const BTN = tw.button`
`

const IndexPage = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <button tw='px-5 py-2 text-primary'>hihi</button>
    <Logo />
  </div>
)

export default IndexPage
