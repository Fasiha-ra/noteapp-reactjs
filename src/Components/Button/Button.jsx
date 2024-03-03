import React from 'react'
import { Btn } from './Button.styles'

const Button = ({name}) => {
  return (
    <>
    <Btn>
    {name}
    </Btn>
    </>
  )
}

export default Button