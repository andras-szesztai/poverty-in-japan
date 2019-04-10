import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ContinueButton = (props) => (
  <div>
    <Button onClick={props.handleClick} color={props.color} size='tiny' animated>
      <Button.Content visible>Continue</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  </div>
)

export default ContinueButton
